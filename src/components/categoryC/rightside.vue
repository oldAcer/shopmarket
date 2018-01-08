<template>
	<aside @click="toggle">
		<div v-show="idShow">
			<a v-for='item,index in footlist' class='classify' :class="'classify'+index" :href="item.url">
				{{item.content}}
			</a>
			<i></i>
		</div>
	</aside>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				footlist: [],
				idShow:false,
			}
		},
		methods:{
			toggle(){
				this.idShow=!this.idShow
			}
		},
		mounted: function() {
			var that = this;
			$.get('https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/footlist', function(res) {
				that.footlist = that.footlist.concat(res.data)
			}, 'json')
		}
	}
</script>

<style>
	aside {
		position: fixed;
		z-index: 1000;
		right: 0;
		bottom: 115px;
		width: 36px;
		height: 36px;
		background: rgba(0, 0, 0, 0.8) url(/static/img/bm.png) 7px 7px no-repeat;
		background-size: 65px 20px;
		border: 1px solid #757575;
		border-radius: 4px 0 0 4px;
	}
	
	aside>div {
		position: absolute;
		right: -1px;
		bottom: 42px;
		width: 95px;
		border: 1px solid #757575;
		background: rgba(0, 0, 0, 0.8);
		font-size: 14px;
	}
	
	aside>div>i {
		position: absolute;
		bottom: -12px;
		right: 10px;
		width: 0;
		height: 0;
		z-index: 15;
		border-width: 6px;
		border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
		border-style: solid;
	}
	
	aside .classify {
		display: block;
		padding-left: 38px;
		border-bottom: 1px solid #4b4b4b;
		line-height: 35px;
		height: 35px;
		color: #fff;
		background-image: url(/static/img/bmenu.png);
		background-repeat: no-repeat;
		background-size: 16px 300px;
	}
	
	aside .classify0 {
		background-position: 10px -50px;
	}
	
	aside .classify1 {
		background-position: 10px -100px;
	}
	
	aside .classify2 {
		background-position: 10px -150px;
	}
	
	aside .classify3 {
		background-position: 10px -200px;
	}
	
	aside .classify4 {
		background-position: 10px -250px;
	}
</style>