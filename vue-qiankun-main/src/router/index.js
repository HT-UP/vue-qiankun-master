import Vue from "vue";
import VueRouter from "vue-router";

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
	},
	{
		path: "/home",
		name: "Home",
		component: () =>
			import( /* webpackChunkName: "home" */ "@/views/home/index")
	}
];

const router = new VueRouter({
	routes,
});

export default router;
