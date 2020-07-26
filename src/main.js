import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

import FastClick from 'fastclick'

import VueLazyload from 'vue-lazyload'

import VueJsonp from 'vue-jsonp'

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

// 自定义插件
Vue.use(toast)

// 解决移动端的点击300ms延迟
FastClick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/timg.gif')
})

// jsonp
Vue.use(VueJsonp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
