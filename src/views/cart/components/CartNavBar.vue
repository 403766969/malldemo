<template>
  <nav-bar class="cart-nav-bar">
    <template #nav-bar-center>
      <h3 class="title">购物车({{cartGoodsLength}})</h3>
    </template>
    <template #nav-bar-right>
      <div class="navBarBtn" @click="navBarClick">{{navBarMsg}}</div>
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
  data() {
    return {
      navBarMsg: '管理'
    }
  },
  methods: {
    navBarClick() {
      if (this.navBarMsg.indexOf('管理') !== -1) {
        this.navBarMsg = '取消'
        this.$emit('manageClick')
      } else if (this.navBarMsg.indexOf('取消') !== -1) {
        this.navBarMsg = '管理'
        this.$emit('cancelClick')
      }
    }
  }
}
</script>

<style scoped>
.cart-nav-bar {
  color: white;
  background-color: var(--color-tint);
}

.cart-nav-bar h3 {
  font-size: 18px;
}

.cart-nav-bar .navBarBtn {
  font-size: 16px;
}
</style>