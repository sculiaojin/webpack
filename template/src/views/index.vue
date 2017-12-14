<template>
	<div id="app">
		<div class="app-head">
		 <x-header title="欢迎使用" :left-options="{showBack: false}"></x-header>
		</div>
		<div class="app-content">
			<div class="row-list">
				<div class="row-item">1.内置vuex</div>
				<div class="row-item">2.内置全局过滤器filter.js(可自行添加完善)</div>
				<div class="row-item">3.内置组件库vux<a href="https://vux.li/#/zh-CN/README">点击前往</a></div>
				<div class="row-item">4.内置css预编译器less(由于vux采用),采用rem布局，屏幕适配参照index.less</div>
				<div class="row-item">5.全局css文件(index.less为全局通用样式，已在app.vue中引用，mixin.less为常用全局样式，可在每个文件单独引入，transition.less为transition动画过度样式)</div>
				<div class="row-item">6.内置网络请求库axios(common文件下axios.js已简单封装，可根据自己需求再次进行完善)</div>
				<div class="row-item">7.内置项目通用方法库文件(common.js为例子，可自行添加完善)</div>
			</div>
			<div class="tips">欢迎交流:QQ:970618860</div>
		</div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import {Util} from '@/common/common'
	export default {
		name: 'login',
		data() {
			return {
			}
		},
		created() {
		},
		methods: {
			
		},
		components: {
			"XHeader":XHeader,
		},
	}
</script>
<style lang="less" scoped>
	@import '../less/mixin';
	.row-list{
		width: 100%;
		padding: 0 .15rem;
		margin: .2rem 0;
		.box-sizing();
		.row-item{
			margin-top:.1rem;
			text-align:left;
			a{
				display: inline-block;
			}
		}
	}
	.tips{
		position: fixed;
		bottom: .15rem;
		left: 0;
		width: 100%;
		color: #f00;
		font-size: .14rem;
	}
</style>