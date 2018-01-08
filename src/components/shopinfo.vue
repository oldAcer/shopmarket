<template>
	<div id="shopinfo">
		<shopbanner></shopbanner>
		<div class="menu">
			<div class="shopsearch">
				<div class="insidesearch">
					<span>搜索店内商品</span>
				</div>
			</div>
			<ul class="left-menu">
				<li v-for="item,index in menuList" :key="index">
					<leftmenu :items="item"></leftmenu>
				</li>
			</ul>
			<ul class="right-menu">
				<poster :poster="poster"></poster>
				<rightmenu :nums="nums" v-for="list ,index in rightMenuList" :rightMenuList="list" :key="index"></rightmenu>
			</ul>
		</div>
		<shopcart></shopcart>
		<rightside></rightside>
	</div>
</template>

<script>
	import leftmenu from "@/components/categoryC/leftMenu";
	import rightmenu from "@/components/categoryC/rightmenu";
	import shopbanner from "@/components/categoryC/shopbanner";
	import poster from "@/components/categoryC/poster";
	import shopcart from "@/components/categoryC/shopcart";
	import rightside from "@/components/categoryC/rightside";
	import $ from "jquery";
	import store from "storejs";
	export default {
		data: function() {
			return {
				menuList: [],
				poster: [],
				nums: {},
			}
		},
		computed: {
			rightMenuList() {
				return this.menuList
			}
		},
		components: {
			shopbanner,
			leftmenu,
			rightmenu,
			poster,
			shopcart,
			rightside,
		},
		mounted() {
			var that = this;
			$.get('https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/shopinfo', function(res) {
				that.menuList = that.menuList.concat(res.data)
			}, "json")
			$.get('https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/poster', function(res) {
				that.poster = res.data;
			}, "json")
		},
		created() {
			var that = this;
			this.$root.pub.$on("nums", function(nums) {
				for(let i in nums) {
					that.$set(that.nums, i, nums[i])
					if(nums[i] == 0) {
						delete that.nums[i]
					}
				}
			});
			this.$root.pub.$on("empty", function(empty) {
				that.nums = {}
			})
			if(!store.has("cart")) {
				store.set("cart", {});
			}
		}
	}
</script>

<style>
	#shopinfo {
		height: 100%;
	}
	
	ul li {
		list-style: none;
	}
	
	.menu {
		width: 100%;
		height:calc(100% - 148px);
		display: flex;
		padding-top: 108px;
		flex-wrap: wrap;
	}
	
	.shopsearch {
		position: relative;
		padding-top: 1px;
		background: #eaeaea;
		height: 40px;
		line-height: 40px;
		padding: 5px 10px;
		box-sizing: border-box;
		width: 100%;
		border-bottom: 1px solid #cfcfcf;
		;
	}
	
	.shopsearch .insidesearch {
		height: 28px;
		line-height: 26px;
		text-align: left;
		position: relative;
		background: #fff;
		border-radius: 2px;
	}
	
	.shopsearch .insidesearch span {
		font-size: 13px;
		color: #999;
		background: url(/static/img/search_bar_sprites.png) no-repeat;
		background-size: 44px auto;
		background-position: -6px -13px;
		padding-left: 28px;
	}
	
	.left-menu {
		width: 84px;
		height: 100%;
		overflow: auto;
	}
	
	.right-menu {
		flex: 1;
		height: 100%;
		overflow: auto;
	}
</style>