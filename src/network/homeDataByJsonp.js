import { jsonpPack } from './jsonpPack'

export default {

  // 轮播图和推荐
  getMultiData() {
    return jsonpPack({
      url: '/home/multidata'
    })
  },

  // 商品列表
  getGoodsData(type, page) {
    return jsonpPack({
      url: '/home/data',
      params: {
        type,
        page
      }
    })
  }

}