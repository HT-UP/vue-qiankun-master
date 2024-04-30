import store from '@/store';
import {
	registerMicroApps,
	addGlobalUncaughtErrorHandler,
	setDefaultMountApp,
	start
} from 'qiankun' // 微应用注册信息
import apps from './app'

// 子应用切换加载进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// setDefaultMountApp('#/micplugin');

// （1）registerMicroApps：包含两个参数，第一个参数是微应用的一些注册信息，第二个参数是全局的微应用生命周期钩子。:
// （2）addGlobalUncaughtErrorHandler：全局的未捕获异常处理器，微应用发生报错的时候亦可以用这个api捕捉。
// （3）start：我们用来启动qiankun的方法，包含一个参数，具体的参数用途不再详述。
registerMicroApps(apps, {
	beforeLoad: (app) => {
		// 加载微应用前，加载进度条    
		NProgress.start();
		
		console.log('before load=====', app.name)
		return Promise.resolve()
	},
	afterMount: (app) => {
		// 加载微应用前，进度条加载完成    
		NProgress.done();

		console.log('after mount=====', app.name)
		store.commit('changeAppName', app.name)
		return Promise.resolve()
	}
})

addGlobalUncaughtErrorHandler((event) => {
	console.error(event)
	const {
		message: msg
	} = event
	if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
		console.error('微应用加载失败，请检查应用是否可运行')
	}
})

export default start
