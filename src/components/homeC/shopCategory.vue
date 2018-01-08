<template>
	<ul class="shopCategoryList">
		<li v-for="item,index in shopCategroyList" :class="'shop shop'+index">
			<a href="">
				<h5>{{item.activityo}}</h5>
				<p>{{item.activitys}}</p>
				<img :src="'/static/img/shop'+item.imgSrc+'.png'" />
			</a>
		</li>
	</ul>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				shopCategroyList: [],
			}
		},
		mounted() {
			var that = this;
			$.get("https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/shopcategory#!method=get", function(res) {
				that.shopCategroyList = that.shopCategroyList.concat(res.data)
			}, "json")
		}
	}
</script>

<style>
	.shopCategoryList {
		width: 100%;
		height: 220px;
		background-color: white;
	}
	
	.shop p {
		color: #9cac96;
		text-align: center;
	}
	
	.shop h5 {
		color: #333333;
		text-align: center;
	}
	
	.shopCategoryList li {
		list-style: none;
		position: relative;
	}
	
	.shop0 {
		width: 43%;
		height: 100%;
		float: left;
	}
	
	.shop0:before {
		content: '';
		position: absolute;
		width: 1px;
		height: 100%;
		border-right: 1px solid #e8e8e8;
		top: 0px;
		right: -1px;
		transform: scaleX(0.5);
	}
	
	.shop0 h5 {
		font-size: 24px;
		margin-top: 30px;
	}
	
	.shop0 p {
		padding: 5px 0;
	}
	
	.shop0 img {
		width: 50%;
		display: block;
		margin: 0 auto;
		margin-top: 30px;
	}
	
	.shop1 {
		width: 57%;
		height: 45%;
		float: left;
	}
	
	.shop1:before {
		content: '';
		height: 1px;
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		transform: scaleY(0.5);
		position: absolute;
		left: 0px;
		bottom: -1px;
	}
	
	.shop1 h5 {
		width: 50%;
		font-size: 16px;
		margin-top: 30px;
	}
	
	.shop1 p {
		width: 50%;
		margin-top: 5px;
	}
	
	.shop1 img {
		width: 30%;
		position: absolute;
		right: 20px;
		top: 20px;
		margin: 0;
	}
	
	.shop2,
	.shop3 {
		width: 28.5%;
		height: 55%;
		float: left;
	}
	
	.shop:after {
		content: '';
		position: absolute;
		width: 1px;
		height: 100%;
		border-right: 1px solid #e8e8e8;
		top: 0px;
		right: -1px;
		transform: scaleX(0.5);
	}
	
	.shop2:before,
	.shop3:before {
		content: '';
		height: 1px;
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		transform: scaleY(0.5);
		position: absolute;
		left: 0px;
		bottom: -1px;
	}
	
	.shop2 h5,
	.shop3 h5 {
		font-size: 16px;
		margin-top: 5px;
	}
	
	.shop2 p,
	.shop3 p {
		margin-top: 5px;
	}
	
	.shop2 img,
	.shop3 img {
		width: 50%;
		margin: 5px 25% 0;
	}
</style>