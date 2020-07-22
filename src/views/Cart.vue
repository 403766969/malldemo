<template>
  <div id="cart">
    <cart-nav-bar :cartGoodsLength="cartGoodsLength" @manageClick="manageClick" />
    <scroll
      class="cart-scroll"
      ref="scroll"
      :pullDownRefresh="{boolean: true, threshold: 80, stop: 0}"
      :click="true"
      @pullingDown="pullingDown"
    >
      <cart-goods-list :cartGoods="cartGoods" />
    </scroll>
    <cart-bottom-bar
      :bottomBarMsg="bottomBarMsg"
      :is-show-delete="isShowDelete"
      @cancelClick="cancelClick"
    />
  </div>
</template>

<script>
// 购物车页组件
import CartNavBar from 'components/content/cart/CartNavBar'
import CartGoodsList from 'components/content/cart/CartGoodsList'
import CartBottomBar from 'components/content/cart/CartBottomBar'
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
      bottomBarMsg: '结算',
      isShowDelete: false
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
      this.isShowDelete = true
    },
    // 取消管理
    cancelClick() {
      this.bottomBarMsg = '结算'
      this.isShowDelete = false
    }
  }
}
</script>

<style scoped>
#cart {
  padding-top: 44px;
  width: 100%;
  height: 100vh;
}

.cart-scroll {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
  background-color: #fff;
}
</style>