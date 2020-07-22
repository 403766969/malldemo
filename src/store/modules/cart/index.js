import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  cartGoods: [
    {
      checked: false,
      count: 1,
      price: '68.00',
      shop: '倩雪香宜定制女装',
      size: 'S',
      style: '单白色卫衣',
      iid: '1m745k0',
      img: '//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg',
      name: '2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮'
    }
  ]
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
