export default {

  // mutations尽量做单一的事情，调试的时候好追踪

  // 添加新的商品
  addGoods(state, payload) {
    payload.checked = false
    state.cartGoods.push(payload)
  },

  // 增加已有商品数量
  addCounts(state, payload) {
    payload.existProduct.count += payload.count
  },

  // 更新商品中checked的值
  updateChecked(state, payload) {
    //1、查找到要修改的商品
    let existProduct = state.cartGoods.find(item =>
      item.iid === payload.item.iid && item.style === payload.item.style && item.size === payload.item.size
    )
    //2、改变checked值
    existProduct.checked = payload.checked
  },

  // 更新商品中count的值
  updateCount(state, payload) {
    //1、查找到要修改的商品
    let existProduct = state.cartGoods.find(item =>
      item.iid === payload.item.iid && item.style === payload.item.style && item.size === payload.item.size
    )
    //2、改变count值
    existProduct.count += payload.count
  },

  // 删除选中的商品
  deleteProduct(state) {
    state.cartGoods = state.cartGoods.filter(item => !item.checked)
  }
}
