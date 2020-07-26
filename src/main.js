import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自定义插件
import toast from 'components/common/toast'

import VueLazyload from 'vue-lazyload'

import FastClick from 'fastclick'

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

Vue.use(toast)

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/timg.gif')
})

// 解决移动端的点击300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
