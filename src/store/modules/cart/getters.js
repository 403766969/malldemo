export default {

  // 返回购物车列表数据
  cartGoods(state) {
    return state.cartGoods
  },

  // 返回购物车中商品种类数量
  cartGoodsLength(state) {
    return state.cartGoods.length
  }

}
