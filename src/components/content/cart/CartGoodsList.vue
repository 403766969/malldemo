<template>
  <div class="cart-goods-list">
    <cart-goods-list-item v-for="(item,index) in cartGoods" :key="index" :product="item" />
  </div>
</template>

<script>
import CartGoodsListItem from 'components/content/cart/CartGoodsListItem'

export default {
  name: 'CartGoodsList',
  components: {
    CartGoodsListItem
  },
  props: {
    cartGoods: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
</style>
