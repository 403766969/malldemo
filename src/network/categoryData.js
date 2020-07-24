import { axiosPack } from './axiosPack'

export default {

  // 获取分类的数据
  getCategory() {
    return axiosPack({
      url: '/category'
    })
  },

  // 获取每个分类栏的数据
  getSubcategory(maitKey) {
    return axiosPack({
      url: '/subcategory',
      params: {
        maitKey
      }
    })
  },

  // 获取每个分类里面的商品信息
  getCategoryDetail(miniWallkey, type) {
    return axiosPack({
      url: '/subcategory/detail',
      params: {
        miniWallkey,
        type
      }
    })
  }

}