<template>
  <div id="detail">
    <detail-nav-bar @detailTitleClick="detailTitleClick" ref="detailNavBar" />
    <scroll
      class="detail-scroll"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="{boolean: true, threshold: -80}"
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
    <back-top v-show="isShowBackTop" @click.native="backTopClick" />
    <div v-show="isShowRefreshMsg" class="refreshMsg">{{refreshMsg}}</div>
  </div>
</template>

<script>
// 商品详情页组件
import DetailNavBar from 'components/content/detail/DetailNavBar'
import DetailSwiper from 'components/content/detail/DetailSwiper'
import DetailBaseInfo from 'components/content/detail/DetailBaseInfo'
import DetailShopInfo from 'components/content/detail/DetailShopInfo'
import DetailGoodsInfo from 'components/content/detail/DetailGoodsInfo'
import DetailGoodsParam from 'components/content/detail/DetailGoodsParam'
import DetailGoodsComment from 'components/content/detail/DetailGoodsComment'
// 商品详情页数据
import detailData from 'network/detailData'
import { BaseInfo, ShopInfo, GoodsParam } from 'network/detailData'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/common/goodsList/GoodsList'
import BackTop from 'components/common/backtop/BackTop'

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
    Scroll,
    GoodsList,
    BackTop
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
      offsetTops: [],
      isShowBackTop: false,
      isShowRefreshMsg: false,
      scrollUpdate: null,
      refreshMsg: ''
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
      if (-position.y < this.$refs.detailGoodsParam.$el.offsetTop) {
        this.$refs.detailNavBar.currentIndex = 0
      } else if (-position.y < this.$refs.detailGoodsComment.$el.offsetTop) {
        this.$refs.detailNavBar.currentIndex = 1
      } else if (-position.y < this.$refs.goodsList.$el.offsetTop) {
        this.$refs.detailNavBar.currentIndex = 2
      } else {
        this.$refs.detailNavBar.currentIndex = 3
      }
    },
    // 下拉刷新
    pullingDown() {
      window.location.reload(true)
    },
    // 标签点击处理
    detailTitleClick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, -this.$refs.detailSwiper.$el.offsetTop, 500)
          break
        case 1:
          this.$refs.scroll.scrollTo(0, -this.$refs.detailGoodsParam.$el.offsetTop, 500)
          break
        case 2:
          this.$refs.scroll.scrollTo(0, -this.$refs.detailGoodsComment.$el.offsetTop, 500)
          break
        case 3:
          this.$refs.scroll.scrollTo(0, -this.$refs.goodsList.$el.offsetTop, 500)
          break
        default:
          this.$refs.scroll.scrollTo(0, -this.$refs.detailSwiper.$el.offsetTop, 500)
      }
    },
    // 返回顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  },
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
  padding-top: 44px;
  width: 100%;
  height: 100vh;
}

.detail-scroll {
  position: relative;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
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