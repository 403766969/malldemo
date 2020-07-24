<template>
  <div class="cart-bottom-bar">
    <div class="check-all" @click="checkAllClick">
      <cart-check-button class="check-btn" :is-checked="isCheckAll" />
      <span>全选</span>
    </div>
    <div class="total-price">
      合计：
      <span>￥{{totalPrice}}</span>
    </div>
    <div class="calculation" @click="calculationClick">{{bottomBarMsg}}({{totalCount}})</div>
  </div>
</template>

<script>
import CartCheckButton from 'views/cart/components/CartCheckButton'
// mapGetters mapMutations
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CartCartBottomBar',
  components: {
    CartCheckButton
  },
  props: {
    bottomBarMsg: {
      type: String,
      default: '结算'
    }
  },
  computed: {
    ...mapGetters({
      cartGoods: 'cart/cartGoods'
    }),

    // 总价格
    totalPrice() {
      let cartGoodsChecked = this.cartGoods.filter(item => item.checked)
      let totalPrice = cartGoodsChecked.reduce((preValue, item) => {
        return item.price * item.count + preValue
      }, 0).toFixed(2)
      return totalPrice
    },

    // 选中的商品个数
    totalCount() {
      return this.cartGoods.filter(item => item.checked).length
    },

    //全选与单选的联动实现
    isCheckAll() {
      return this.cartGoods.length !== 0 ? this.cartGoods.every(item => item.checked) : false
    }
  },
  methods: {
    ...mapMutations({
      updateChecked: 'cart/updateChecked',
      deleteProduct: 'cart/deleteProduct'
    }),

    // 点击全选按钮
    checkAllClick() {
      let checkd = !this.isCheckAll
      for (let item of this.cartGoods) {
        let payload = {
          item: item,
          checked: checkd
        }
        this.updateChecked(payload)
      }
    },

    // 点击结算按钮
    calculationClick() {
      if (!this.cartGoods.some(item => item.checked)) {
        this.$toast.showToast('请至少选择一项商品!', 800)
      } else {
        if (this.bottomBarMsg.indexOf('结算') !== -1) {
          this.$toast.showToast(`需要支付${this.totalPrice}元!`, 800)
        } else if (this.bottomBarMsg.indexOf('删除') !== -1) {
          this.deleteProduct()
        }
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar {
  display: flex;
  position: fixed;
  bottom: 49px;
  left: 0;
  width: 100%;
  height: 40px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
}

.check-all {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  line-height: 40px;
}

.check-all .check-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}

.total-price,
.cancel {
  flex: 2;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.total-price span {
  color: var(--color-tint);
}

.calculation {
  flex: 1;
  height: 40px;
  line-height: 40px;
  color: white;
  text-align: center;
  background-color: var(--color-high-text);
}
</style>
