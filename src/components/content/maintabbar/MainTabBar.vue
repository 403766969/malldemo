<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#ff5777">
      <template #tab-bar-item-icon>
        <img src="~assets/img/tabbar/home.svg" alt="home" />
      </template>
      <template #tab-bar-item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="home_active" />
      </template>
      <template #tab-bar-item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#ff5777">
      <template #tab-bar-item-icon>
        <img src="~assets/img/tabbar/category.svg" alt="category" />
      </template>
      <template #tab-bar-item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="category_active" />
      </template>
      <template #tab-bar-item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#ff5777">
      <template #tab-bar-item-icon>
        <img src="~assets/img/tabbar/shopcart.svg" alt="shopcart" />
      </template>
      <template #tab-bar-item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="shopcart_active" />
      </template>
      <template #tab-bar-item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#ff5777">
      <template #tab-bar-item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt="profile" />
      </template>
      <template #tab-bar-item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="profile_active" />
      </template>
      <template #tab-bar-item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>