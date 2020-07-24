<template>
  <div id="cart">
    <cart-nav-bar
      :cartGoodsLength="cartGoodsLength"
      @manageClick="manageClick"
      @cancelClick="cancelClick"
    />
    <scroll
      class="cart-scroll"
      ref="scroll"
      :pullDownRefresh="{boolean: true, threshold: 80, stop: 0}"
      :click="true"
      @pullingDown="pullingDown"
    >
      <cart-goods-list :cartGoods="cartGoods" />
    </scroll>
    <cart-bottom-bar :bottomBarMsg="bottomBarMsg" />
  </div>
</template>

<script>
// 购物车页组件
import CartNavBar from 'views/cart/components/CartNavBar'
import CartGoodsList from 'views/cart/components/CartGoodsList'
import CartBottomBar from 'views/cart/components/CartBottomBar'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'
// mapGetters
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    Scroll,
    CartNavBar,
    CartGoodsList,
    CartBottomBar
  },
  data() {
    return {
      bottomBarMsg: '结算'
    }
  },
  computed: {
    ...mapGetters({
      cartGoods: 'cart/cartGoods',
      cartGoodsLength: 'cart/cartGoodsLength'
    })
  },
  methods: {
    // 下拉刷新
    pullingDown() {
      window.location.reload(true)
    },
    // 管理购物车
    manageClick() {
      this.bottomBarMsg = '删除'
    },
    // 取消管理
    cancelClick() {
      this.bottomBarMsg = '结算'
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
#cart {
  padding: 44px 0 89px 0;
  width: 100%;
  background-color: #fff;
}

.cart-scroll {
  position: fixed;
  top: 44px;
  bottom: 89px;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
</style>