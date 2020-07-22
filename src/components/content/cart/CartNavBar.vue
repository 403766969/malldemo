<template>
  <nav-bar class="cart-nav-bar">
    <template #nav-bar-center>
      <div class="title">购物车({{cartGoodsLength}})</div>
    </template>
    <template #nav-bar-right>
      <div class="manageBtn" @click="manageClick">管理</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  },
  props: {
    cartGoodsLength: {
      type: Number,
      default: 0
    }
  },
  methods: {
    manageClick() {
      this.$emit('manageClick')
    }
  }
}
</script>

<style scoped>
.cart-nav-bar {
  color: white;
  background-color: var(--color-tint);
}
</style>