<template>
  <div id="home">
    <home-nav-bar />
    <div v-show="isShowRefreshMsg" class="refreshMsg">{{refreshMsg}}</div>
    <tab-control
      ref="tabControlFixed"
      :tabTitles="['流行','新款','精选']"
      @tabControlClick="tabControlClick"
      class="tab-control-fixed"
      v-show="isShowTabFixed"
    />
    <scroll
      class="home-scroll"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="{boolean: true, threshold: -80}"
      :pullDownRefresh="{boolean: true, threshold: 80, stop: 0}"
      :click="true"
      @scroll="scroll"
      @pullingUp="pullingUp"
      @pullingDown="pullingDown"
    >
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-weekpop />
      <tab-control
        ref="tabControl"
        :tabTitles="['流行','新款','精选']"
        @tabControlClick="tabControlClick"
      />
      <goods-list :goods-list="showGoodsList" />
      <div class="loadMsg">上拉加载更多</div>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTopClick" />
  </div>
</template>

<script>
// 首页数据
import homeData from 'network/homeData'
// 首页组件
import HomeNavBar from 'components/content/home/HomeNavBar'
import HomeSwiper from 'components/content/home/HomeSwiper'
import HomeRecommend from 'components/content/home/HomeRecommend'
import HomeWeekpop from 'components/content/home/HomeWeekpop'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/common/tabcontrol/TabControl'
import GoodsList from 'components/common/goodsList/GoodsList'
// 公共函数
import { debounce } from 'common/utils'
// 混入
import { backTopMixin } from 'common/mixin'


export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeWeekpop,
    Scroll,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowTabFixed: false,
      isShowRefreshMsg: false,
      refreshMsg: '',
      saveY: 0
    }
  },
  computed: {
    showGoodsList() {
      return this.goodsList[this.currentType].list
    }
  },
  methods: {
    // 获取轮播图和推荐数据
    getMultiData() {
      homeData.getMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 获取商品列表
    getGoodsData(type) {
      this.goodsList[type].page++
      homeData.getGoodsData(type, this.goodsList[type].page).then(res => {
        this.goodsList[type].list.push(...res.data.list)
      })
    },
    // 商品标签点击处理
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
        default:
          this.currentType = 'pop'
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlFixed.currentIndex = index;
    },
    // 滚动处理
    scroll(position) {
      this.isShowTabFixed = (-position.y >= this.$refs.tabControl.$el.offsetTop)
      this.isShowBackTop = (-position.y >= 2000)
      this.isShowRefreshMsg = (position.y > 0)
      if (position.y >= 80) {
        this.refreshMsg = '松开立即刷新'
      } else {
        this.refreshMsg = '↓下拉刷新'
      }
    },
    // 上拉加载更多
    pullingUp() {
      this.getGoodsData(this.currentType)
    },
    // 下拉刷新页面
    pullingDown() {
      window.location.reload(true)
    }
  },
  // 混入
  mixins: [backTopMixin],
  created() {
    // 组件插件完成请求数据
    this.getMultiData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  mounted() {
    // 页面数据更新时刷新滚动
    const scrollUpdate = debounce(() => {
      this.$refs.scroll.refresh()
    }, 200)
    this.$bus.$off('imaggoodsListImagesLoadeLoad').$on('goodsListImagesLoad', () => {
      scrollUpdate()
    })
  },
  activated() {
    // 进入页面时重新设置滚动位置
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 10)
  },
  deactivated() {
    // 记录离开页面时的滚动位置
    this.saveY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  width: 100%;
  height: 100vh;
}

.home-scroll {
  position: relative;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}

.tab-control-fixed {
  position: fixed;
  top: 44px;
  left: 0;
  z-index: 999;
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

.loadMsg {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}
</style>