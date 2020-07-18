<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <tab-control
      :tabTitles="['流行','新款','精选']"
      @tabControlClick="tabControlClick"
      class="tab-control-fixed"
      v-show="isTabFixed"
    />
    <scroll
      id="home-scroll"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="{boolean: true, threshold: -80}"
      :pullDownRefresh="{boolean: true, threshold: 80, stop: 0}"
      :click="true"
      :delay="2000"
      @scroll="scroll"
      @pullingUp="pullingUp"
      @pullingDown="pullingDown"
    >
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-weekpop />
      <tab-control :tabTitles="['流行','新款','精选']" @tabControlClick="tabControlClick" />
      <goods-list :goods-list="showGoodsList" />
    </scroll>
  </div>
</template>

<script>
// 首页组件
import HomeNavBar from 'components/content/home/HomeNavBar'
import HomeSwiper from 'components/content/home/HomeSwiper'
import HomeRecommend from 'components/content/home/HomeRecommend'
import HomeWeekpop from 'components/content/home/HomeWeekpop'
// 首页数据
import homeData from 'network/homeData'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/common/tabcontrol/TabControl'
import GoodsList from 'components/common/goodsList/GoodsList'

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
      isTabFixed: false
    }
  },
  computed: {
    showGoodsList() {
      return this.goodsList[this.currentType].list
    }
  },
  methods: {
    getMultiData() {
      homeData.getMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getGoodsData(type) {
      this.goodsList[type].page++
      homeData.getGoodsData(type, this.goodsList[type].page).then(res => {
        this.goodsList[type].list.push(...res.data.list)
      })
    },
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
    },
    scroll(position) {
      this.isTabFixed = -position.y >= 675
    },
    pullingUp() {
      console.log('pullingUp')
      this.getGoodsData(this.currentType)
    },
    pullingDown() {
      console.log('pullingDown')
      window.location.reload(true)
    }
  },
  created() {
    this.getMultiData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  }
}
</script>

<style scoped>
#home-scroll {
  margin-top: 44px;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}

.tab-control-fixed {
  position: fixed;
  top: 44px;
  left: 0;
  z-index: 999;
}
</style>