<template>
  <div id="detail">
    <detail-nav-bar @detailTitleClick="detailTitleClick" ref="detailNavBar" />
    <div v-show="isShowRefreshMsg" class="refreshMsg">{{refreshMsg}}</div>
    <scroll
      class="detail-scroll"
      ref="scroll"
      :probeType="3"
      :pullDownRefresh="{boolean: true, threshold: 80, stop: 0}"
      :click="true"
      @scroll="scroll"
      @pullingDown="pullingDown"
    >
      <detail-swiper :topImages="topImages" ref="detailSwiper" />
      <detail-base-info :baseInfo="baseInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info :goods-info="goodsInfo" />
      <detail-goods-param :goods-param="goodsParam" ref="detailGoodsParam" />
      <detail-goods-comment :goods-comment="goodsComment" ref="detailGoodsComment" />
      <goods-list :goods-list="recommends" ref="goodsList" />
    </scroll>
    <detail-bottom-bar @openBuyOptions="openBuyOptions" />
    <detail-buy-options
      v-show="isShowBuyOptions"
      :buy-options="buyOptions"
      @closeBuyOptions="closeBuyOptions"
      @commitClick="commitClick"
      ref="detailBuyOptions"
    />
    <back-top v-show="isShowBackTop" @click.native="backTopClick" />
  </div>
</template>

<script>
// 商品详情页组件
import DetailNavBar from 'views/detail/components/DetailNavBar'
import DetailSwiper from 'views/detail/components/DetailSwiper'
import DetailBaseInfo from 'views/detail/components/DetailBaseInfo'
import DetailShopInfo from 'views/detail/components/DetailShopInfo'
import DetailGoodsInfo from 'views/detail/components/DetailGoodsInfo'
import DetailGoodsParam from 'views/detail/components/DetailGoodsParam'
import DetailGoodsComment from 'views/detail/components/DetailGoodsComment'
import DetailBottomBar from 'views/detail/components/DetailBottomBar'
import DetailBuyOptions from 'views/detail/components/DetailBuyOptions'
// 商品详情页数据
import detailData from 'network/detailData'
import { BaseInfo, ShopInfo, GoodsParam } from 'network/detailData'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goodsList/GoodsList'
// 自定义插件
import Toast from 'components/common/toast/Toast'
// mapActions
import { mapActions } from 'vuex'
// 混入
import { backTopMixin } from 'common/mixin'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailGoodsComment,
    DetailBottomBar,
    DetailBuyOptions,
    Scroll,
    GoodsList
  },
  data() {
    return {
      iid: '',
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      goodsInfo: {},
      goodsParam: {},
      goodsComment: {},
      recommends: [],
      buyOptions: {},
      offsetTops: [],
      isShowBuyOptions: false,
      isShowRefreshMsg: false,
      refreshMsg: '',
      isClickNavTab: false,
      clickNavTabTimer: null
    }
  },
  methods: {
    // 页面滚动
    scroll(position) {
      this.isShowBackTop = (-position.y >= 2000)
      this.isShowRefreshMsg = (position.y > 0)
      if (position.y >= 80) {
        this.refreshMsg = '松开立即刷新'
      } else {
        this.refreshMsg = '↓下拉刷新'
      }
      if (!this.isClickNavTab) {
        if (-position.y < this.$refs.detailGoodsParam.$el.offsetTop) {
          this.$refs.detailNavBar.currentIndex = 0
        } else if (-position.y < this.$refs.detailGoodsComment.$el.offsetTop) {
          this.$refs.detailNavBar.currentIndex = 1
        } else if (-position.y < this.$refs.goodsList.$el.offsetTop) {
          this.$refs.detailNavBar.currentIndex = 2
        } else {
          this.$refs.detailNavBar.currentIndex = 3
        }
      }
    },
    // 下拉刷新
    pullingDown() {
      window.location.reload(true)
    },
    // 标签点击处理
    detailTitleClick(index) {
      this.isClickNavTab = true
      if (this.clickNavTabTimer) {
        clearTimeout(this.clickNavTabTimer)
      }
      this.clickNavTabTimer = setTimeout(() => { this.isClickNavTab = false }, 500)
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, -this.$refs.detailSwiper.$el.offsetTop, 500)
          this.$refs.detailNavBar.currentIndex = 0
          break
        case 1:
          this.$refs.scroll.scrollTo(0, -this.$refs.detailGoodsParam.$el.offsetTop, 500)
          this.$refs.detailNavBar.currentIndex = 1
          break
        case 2:
          this.$refs.scroll.scrollTo(0, -this.$refs.detailGoodsComment.$el.offsetTop, 500)
          this.$refs.detailNavBar.currentIndex = 2
          break
        case 3:
          this.$refs.scroll.scrollTo(0, -this.$refs.goodsList.$el.offsetTop, 500)
          this.$refs.detailNavBar.currentIndex = 3
          break
        default:
          this.$refs.scroll.scrollTo(0, -this.$refs.detailSwiper.$el.offsetTop, 500)
          this.$refs.detailNavBar.currentIndex = 0
      }
    },
    // 打开购物车
    openBuyOptions() {
      this.isShowBuyOptions = true
    },
    // 关闭购物车
    closeBuyOptions() {
      this.isShowBuyOptions = false
    },
    // 映射this.addCartGoods()为this.$store.dispatch('cart/addCartGoods')
    ...mapActions({
      addCartGoods: 'cart/addCartGoods'
    }),
    // 往购物车中添加商品
    commitClick(product) {
      // 1.获取购物车需要展示的信息
      let newGoods = {}
      newGoods.iid = this.iid
      newGoods.name = this.baseInfo.title
      newGoods.shop = this.shopInfo.name
      newGoods.img = product.img
      newGoods.style = product.style
      newGoods.size = product.size
      newGoods.price = product.price
      newGoods.count = product.count
      // 2.将商品加入到购物车执行成功后调用then(Vuex)
      this.addCartGoods(newGoods).then(res => {
        this.isShowBuyOptions = false
        this.$toast.showToast(res, 800)
      }).catch(err => {
        this.$toast.showToast(err, 800)
      })
    }
  },
  // 混入
  mixins: [backTopMixin],
  created() {
    // 1、保存传入的iid
    this.iid = this.$route.params.iid
    // 2.根据iid请求数据
    detailData.getDetailData(this.iid).then(res => {
      const data = res.result
      // 商品轮播图
      this.topImages = data.itemInfo.topImages
      // 商品基本信息
      this.baseInfo = new BaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
      // 店铺信息
      this.shopInfo = new ShopInfo(data.shopInfo)
      // 商品详细信息
      this.goodsInfo = data.detailInfo
      // 商品参数信息
      this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 商品评论信息
      if (data.rate.cRate > 0) {
        this.goodsComment = data.rate.list[0]
      }
      // 购买选项信息
      this.buyOptions = data.skuInfo
    })
    // 3.请求推荐信息
    detailData.getRecommend().then(res => {
      this.recommends = res.data.list
    })
  }
}
</script>

<style scoped>
#detail {
  padding: 44px 0 49px 0;
  width: 100%;
  background-color: #fff;
}

.detail-scroll {
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.refreshMsg {
  position: absolute;
  left: 0;
  top: 44px;
  z-index: -1;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}
</style>