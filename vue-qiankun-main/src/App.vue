<template>
	<div id="app">
		<el-container id="home" style="width: 100%;height: 100%;">
			<el-header
				style="background: #101a38;background-image: linear-gradient(120deg, #00e4d0 1%, #5983e8 100%);min-width: 1024px;">
				<div class="logo">
					智慧校园云平台
				</div>
			</el-header>
			<el-container
				style="width: 100%;height: -moz-calc(100% - 60px);height: -webkit-calc(100% - 60px);height: calc(100% - 60px);">
				<el-aside width="200px">
					<!--导航菜单-->
					<el-menu class="sidebar-el-menu" :default-active="onRoutes" background-color="#324157"
						text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
						<template v-for="item in menuItems">
							<template v-if="item.subs">
								<el-submenu :index="item.index" :key="item.index">
									<template slot="title">
										<i :class="item.icon"></i>
										<span slot="title">{{ item.title }}</span>
									</template>
									<template v-for="subItem in item.subs">
										<el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
											<template slot="title">{{ subItem.title }}</template>
											<el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i"
												:index="threeItem.index">{{ threeItem.title }}</el-menu-item>
										</el-submenu>
										<el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
										</el-menu-item>
									</template>
								</el-submenu>
							</template>
							<template v-else>
								<el-menu-item :index="item.index" :key="item.index">
									<i :class="item.icon"></i>
									<span slot="title">{{ item.title }}</span>
								</el-menu-item>
							</template>
						</template>
					</el-menu>
				</el-aside>
				<el-main
					style="width: -moz-calc(100% - 200px);width: -webkit-calc(100% - 200px);width: calc(100% - 200px);height: 100%;padding: 0;overflow: hidden;">
					<router-view></router-view>
		
					<!-- 微应用的容器 -->
					<div id="micro-container"></div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuItems: [{
					icon: 'el-icon-office-building',
					index: '/about',
					title: '主应用'
				}, {
					icon: 'el-icon-office-building',
					index: '/micplugin/homepage',
					title: '子应用'
				}]
			}
		},
		computed: {
			onRoutes() {
				if (this.$route.path == '/companyInfoManagement') {
					return "companyInfo";
				} else {
					console.log(this.$route.path.replace('/', ''));
					return this.$route.path;
				}

			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}
	html,body{
		height: 100%;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
	}
</style>
