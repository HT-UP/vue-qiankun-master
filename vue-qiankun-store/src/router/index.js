// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// 判断环境是否是微应用打开
let microPath = ''
if (window.__POWERED_BY_QIANKUN__) {
	microPath = '/store'
}


const routes = [{
		path: microPath + '/',
		redirect: microPath + '/home'
	},
	{
		path: microPath + '/home',
		name: 'Home',
		component: () => import( /* webpackChunkName: "home" */ '@/views/home/index')
		meta: {
			title: '首页'
		}
	}
]

const router = new VueRouter({
	routes
})

export default routes
