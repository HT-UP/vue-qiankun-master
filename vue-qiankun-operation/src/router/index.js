// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// 判断环境是否是微应用打开
let microPath = ''
if (window.__POWERED_BY_QIANKUN__) {
  microPath = '/operation'
}


const routes = [
  {
    path: microPath + '/',
    redirect: microPath + '/homepage'
  },
  {
    path: microPath + '/homepage',
    name: 'homepage',
    component: () => import(/* webpackChunkName: "homepage" */ '../views/Homepage.vue')
  },
  {
    path: microPath + '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// const router = new VueRouter({
//   routes
// })

export default routes
