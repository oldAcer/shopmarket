<template>
	<div class="lst">
		<a class="lt" :href="'#'+items.smenu[0].id" @click="toggle">{{items.fmenu}}</a>
		<a class="ls" v-for="item,index in items.smenu" :class="liClass" v-show="isA" :href="'#'+item.id">{{item.smenutitle}}</a>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				liClass: "ls",
				isA: false,
			}
		},
		props: ["items"],
		methods: {
			toggle() {
				this.isA = !this.isA;
			}
		},
	}
</script>

<style>
	.lst a {
		width:84px;
		font-size: 13px;
		width: 84px;
		display: block;
		line-height: 46px;
		height: 46px;
		padding-left: 14px;
		box-sizing: border-box;
		border-top: 1px solid #E8E8E8;
		text-overflow: ellipsis;
		font-weight: normal;
	}
	
	.ls {
		overflow: hidden;
		background: #fff;
		color: #47b34f;
	}
	
	.lt {
		color: #666666;
		background-color: #f4f4f4;
		position: relative;
	}
</style>