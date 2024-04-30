import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		isSubApp: false,
		appName: '',
	},
  getters: {},
  mutations: {
		changeIsSubApp: (state, isSubApp) => {
		  state.isSubApp = isSubApp;
		},
		changeAppName: (state, appName) => {
		  state.appName = appName;
		}
	},
  actions: {},
  modules: {},
});
