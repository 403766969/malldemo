export default {
  addCartGoods({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      // 判断是否已有该商品
      let existProduct = state.cartGoods.find(item =>
        //如果id、颜色、尺吗都一样就判断为同一商品
        item.iid === payload.iid && item.style === payload.style && item.size === payload.size
      )
      // existProduct有值则增加该商品数量，否则直接添加新的商品
      if (existProduct) {
        commit('addCounts', {
          existProduct: existProduct,
          count: payload.count
        })
        resolve('商品已存在！数量加' + payload.count)
      } else {
        commit('addGoods', payload)
        resolve('加入购物车成功 ✔')
      }
    })
  }
}
