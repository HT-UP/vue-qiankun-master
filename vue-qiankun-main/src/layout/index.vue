<template>
	<div id="layout">
		<el-container>
			<el-header>
				<div class="logo-app">
					<img src="../assets/imgs/logo.png" />
				</div>
				<div class="login-out">
					<i class="el-icon-switch-button"></i>
				</div>
			</el-header>
			<el-main>
				<div id="sub-container"></div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import store from '@/store';

	export default {
		data() {
			return {

			}
		},
		created() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	#layout {
		.el-header {
			min-width: 1280px;
			z-index: 1000;
			box-shadow: 0 0 10px rgb(3 3 3 / 50%);
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		
		.logo-app {
			height: 100%;
			display: flex;
			align-items: center;
		}
		
		.login-out {
			.el-icon-switch-button {
				font-size: 20px;
				cursor: pointer;
				color: #409EFF;
			}
		}
	}
</style>
