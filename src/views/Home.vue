<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <home-weekpop />
    <tab-control :tabTitles="['流行','新款','精选']" @tabControlClick="tabControlClick" />
    <goods-list :goods-list="showGoodsList" />
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
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
import TabControl from 'components/common/tabcontrol/TabControl'
import GoodsList from 'components/common/goodsList/GoodsList'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeWeekpop,
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
      currentType: 'pop'
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
</style>