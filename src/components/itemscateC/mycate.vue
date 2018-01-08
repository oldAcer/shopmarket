<template>
	<div class="mycate">
		<div class="leftcate">
			<ul>
				<li v-for="item,index in items" :key="index" :class="{'cl':!item.ishow ,'active':item.ishow}">
					<a :href="'#'+item.total[0].id" @click="ishow(item.total[0].id)">{{item.ttitle}}</a>
				</li>
			</ul>
		</div>
		<div class="rightcate">
			<ul>
				<rightcate v-for="item,index in items" :rightcate="item" :key="index"></rightcate>
			</ul>

		</div>
	</div>
</template>
<script>
	import rightcate from "@/components/itemscateC/rightcate"
	import $ from "jquery"
	export default {
		data() {
			return {
				items: []
			}
		},
		components: {
			rightcate,
		},
		methods: {
			ishow(id) {
				for(let i = 0; i < this.items.length; i++) {
					this.items[i].ishow = false;
					if(id == this.items[i].total[0].id) {
						this.items[i].ishow = true;
					}
				}
			}
		},
		created() {
			var that = this;
			$.get("https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/cateitem", function(res) {
				res.data[0].ishow = true;
				that.items = that.items.concat(res.data)
			}, "json")
		}
	}
</script>

<style>
	.mycate {
		padding-top: 45px;
		height: calc(100% - 45px);
		display: flex;
	}
	
	.mycate .leftcate {
		width: 90px;
		height: 100%;
		background: #f8f8f8;
	}
	
	.mycate .rightcate {
		flex: 1;
		height: 100%;
		overflow: auto;
	}
	
	.rightcate ul li {
		list-style: none;
	}
	
	.cl {
		height: 43px;
		line-height: 44px;
		font-size: 14px;
		color: #666666;
		border-bottom: 1px solid #e8e8e8;
		border-right: 1px solid #e8e8e8;
		background-color: #f8f8f8;
		position: relative;
		box-sizing: border-box;
	}
	
	.active {
		height: 43px;
		line-height: 44px;
		font-size: 14px;
		color: #666666;
		border-bottom: 1px solid #e8e8e8;
		border-right: 1px solid #e8e8e8;
		background-color: #f8f8f8;
		position: relative;
		box-sizing: border-box;
	}
	
	.cl a {
		display: block;
		width: 76px;
		height: 40px;
		color: #666;
		padding-left: 14px;
	}
	
	.active:before {
		position: absolute;
		top: 0;
		left: -1px;
		content: '';
		width: 3px;
		height: 100%;
		background-color: #47b34f;
	}
	
	.active a {
		width: 76px;
		height: 100%;
		display: block;
		background: #fff;
		color: #47b34f;
		padding-left: 14px;
	}
</style>