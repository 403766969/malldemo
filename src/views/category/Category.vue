<template>
  <div id="category">
    <category-nav-bar />
    <scroll class="menu-scroll" ref="menuScroll" :click="true">
      <side-menu :categories="categories" @menuItemClick="menuItemClick" />
    </scroll>
    <scroll class="content-scroll" ref="contentScroll" :click="true">
      <category-grid-view :subcategories="showSubcategories" />
    </scroll>
  </div>
</template>

<script>
import Vue from 'vue'
// 分类页面数据
import categoryDataByAxios from 'network/categoryDataByAxios'
// import categoryDataByJsonp from 'network/categoryDataByJsonp'
// 分类页面组件
import CategoryNavBar from 'views/category/components/CategoryNavBar'
import CategoryGridView from 'views/category/components/CategoryGridView'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'
import SideMenu from 'components/common/sidemenu/SideMenu'

export default {
  name: 'Category',
  components: {
    CategoryNavBar,
    CategoryGridView,
    Scroll,
    SideMenu
  },
  data() {
    return {
      categories: [],
      subcategories: [],
      categoryIndex: 0
    }
  },
  computed: {
    showSubcategories() {
      return this.subcategories[this.categoryIndex]
    }
  },
  methods: {
    // 获取分类
    getCategory() {
      // axios
      categoryDataByAxios.getCategory().then(res => {
        this.categories = res.data.category.list
        this.categories.forEach((item, index) => {
          this.getSubcategory(item.maitKey, index)
        })
      })
      // jsonp
      // categoryDataByJsonp.getCategory().then(res => {
      //   this.categories = res.data.category.list
      //   this.categories.forEach((item, index) => {
      //     this.getSubcategory(item.maitKey, index)
      //   })
      // })
    },
    // 获取子分类
    getSubcategory(maitKey, index) {
      // axios
      categoryDataByAxios.getSubcategory(maitKey).then(res => {
        Vue.set(this.subcategories, index, res.data.list)
      })
      // jsonp
      // categoryDataByJsonp.getSubcategory(maitKey).then(res => {
      //   Vue.set(this.subcategories, index, res.data.list)
      // })
    },
    // 点击侧边菜单
    menuItemClick(index) {
      this.categoryIndex = index
    }
  },
  created() {
    this.getCategory()
  },
  activated() {
    this.$refs.menuScroll.refresh()
  }
}
</script>

<style scoped>
#category {
  padding: 44px 0 49px 100px;
  width: 100%;
  background-color: #fff;
}

.menu-scroll {
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  width: 100px;
  overflow: hidden;
  background-color: #fff;
}

.content-scroll {
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 100px;
  right: 0;
  overflow: hidden;
  background-color: #fff;
}
</style>