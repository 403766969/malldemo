import { axiosPack } from './axiosPack'

export default {

  // 轮播图和推荐
  getMultiData() {
    return axiosPack({
      url: '/home/multidata'
    })
  },

  // 商品列表
  getGoodsData(type, page) {
    return axiosPack({
      url: '/home/data',
      params: {
        type,
        page
      }
    })
  }

}