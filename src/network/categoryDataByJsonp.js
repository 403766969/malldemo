import { jsonpPack } from './jsonpPack'

export default {

  // 获取分类的数据
  getCategory() {
    return jsonpPack({
      url: '/category'
    })
  },

  // 获取每个分类栏的数据
  getSubcategory(maitKey) {
    return jsonpPack({
      url: '/subcategory',
      params: {
        maitKey
      }
    })
  },

  // 获取每个分类里面的商品信息
  getCategoryDetail(miniWallkey, type) {
    return jsonpPack({
      url: '/subcategory/detail',
      params: {
        miniWallkey,
        type
      }
    })
  }

}