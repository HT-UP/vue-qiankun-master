import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store';

Vue.use(VueRouter);

const routes = [{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/login",
		name: "Login",
		component: () =>
			import( /* webpackChunkName: "login" */ "@/views/login/index"),
		meta: {
			title: '登录'
		}
	}
];

const router = new VueRouter({
	routes,
});

// 全局解析守卫
router.beforeResolve((to, from, next) => {
	next();
})
// 全局导航钩子
router.beforeEach((to, from, next) => {
	if (to.path == '/login') {
		next();
	} else{
		store.commit('changeIsSubApp', true);
		next();
	}
});

export default router;
