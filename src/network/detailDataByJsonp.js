import { jsonpPack } from './jsonpPack'

export default {

  // 根据iid请求商品详情信息
  getDetailData(iid) {
    return jsonpPack({
      url: '/detail',
      params: {
        iid
      }
    })
  },

  // 请求推荐信息
  getRecommend() {
    return jsonpPack({
      url: '/recommend'
    })
  }

}

// 将商品数据封装到一个类中
export class BaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 店铺信息
export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

// 商品的参数信息
export class GoodsParam {
  constructor(info, rule) {
    this.infos = info.set
    this.sizes = rule.tables
  }
}