import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/home/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('views/category/Category'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('views/cart/Cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile/Profile'),
    meta: {
      title: '我的'
    }
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: () => import('views/detail/Detail'),
    meta: {
      title: '商品详情'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//导航守卫
router.beforeEach((to, from, next) => {
  //修改标题
  document.title = to.meta.title
  next()
})

export default router
