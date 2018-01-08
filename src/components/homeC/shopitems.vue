<template>
	<div class="shop-items">
		<p class="near-shop">
			<span>{{nearshop}}</span>
		</p>
		<ul class="shopinfo">
			<li v-for="item,index in shopInfo">
				<a @click="open(item.id,item.shopName)" class="l">
					<img :src="'/static/img/shopitems'+item.img+'.jpg'">
				</a>
				<div class="r">
					<a @click="open(item.id,item.shopName)" class="up">
						<p class="shopName">{{item.shopName}}</p>
						<p class="sendWay">
							<span>{{item.sendWay}}-{{item.sendTime}}</span>
						</p>
						<div class="star-vol">
							<span class="star">{{item.star}}</span>
							<span class="volume">月售{{item.volume}}单</span>
						</div>
						<p class="sendinfo">
							<span>{{item.price}}元起送,</span>
							<span>距离{{item.distance}}公里,</span>
							<span>基础运费{{item.sendPrice}}元</span>
						</p>
					</a>
					<a class="down">
						<div class="activity" :class="{'activity1':isA,'activity2':!isA}">
							<span @click.stop="getMore">
								<i class="more"></i>
							</span>
							<p class="Coupons">
								<i>领券</i>
								<span>{{item.activity.Coupons}}</span>
							</p>
							<p class="fullCut" v-for="text1,index1 in item.activity.fullCut">
								<i>满减</i>
								<span>{{text1}}</span>
							</p>
							<p class="fullFolding" v-for="text2,index2 in item.activity.fullFolding">
								<i>满折</i>
								<span>{{text2}}</span>
							</p>
						</div>
					</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		data() {
			return {
				nearshop: "附近的店铺",
				shopInfo: [],
				isA: true,
			}
		},
		methods: {
			getMore() {
				this.isA = !this.isA
			},
			getMoreShop() {
				var that = this;
				$.get("https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/shopitems#!method=get", function(res) {
					that.shopInfo = that.shopInfo.concat(res.data)
				}, "json")
			},
			open(shopid,shopname){
				this.$router.push('/shopinfo/'+shopid+'/'+shopname)
			}
		},
		created() {
			this.getMoreShop();
		},
		mounted(){
			var that = this;
			var flag = true;
			window.addEventListener('scroll', function() {
				if(flag){
					setTimeout(function() {
						var scrollHeight = document.documentElement.scrollHeight;
						var clientHeight = document.documentElement.clientHeight;
						var scrollTop = document.documentElement.scrollTop;
						if(scrollTop + clientHeight >= scrollHeight - 350) {
							that.getMoreShop();
							flag = true;
						}
					},1000)
					flag = false;
				}
			})
		},
	}
</script>

<style>
	.shop-items {
		width: 100%;
		background-color: white;
	}
	
	.near-shop {
		width: 100%;
		height: 50px;
		background-color: #FFF;
		text-align: center;
		position: relative;
	}
	
	.near-shop span {
		font-size: 17px;
		display: inline-block;
		position: relative;
		height: 100%;
		line-height: 50px;
		font-weight: bold;
		color: #333;
		margin: 0 auto;
		padding: 0 5px;
		background-color: white;
	}
	
	.near-shop:before {
		content: '';
		width: 228px;
		height: 1px;
		border-top: 1px solid #333;
		transform: scaleY(0.5);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -114px;
	}
	
	.shopinfo {
		list-style: none;
		width: 100%;
	}
	
	.shopinfo li {
		display: flex;
		height: auto;
		overflow: auto;
		width: calc(100% - 20px);
		padding: 15px 10px;
		border-top: 1px solid #e7e9e4;
	}
	
	.shopinfo .l {
		margin-right: 10px;
		width: 66px;
	}
	
	.shopinfo .l img {
		width: 100%
	}
	
	.r {
		flex: 1;
		height: auto;
	}
	
	.r a {
		display: block;
		color: #999;
	}
	
	.up p {
		margin-top: 5px;
	}
	
	.shopName {
		width: 100%;
		height: 20px;
		line-height: 20px;
		font-size: 16px;
		color: #333;
		font-weight: bold;
	}
	
	.sendWay span {
		display: inline-block;
		width: auto;
		border: 1px solid #16A9ff;
		border-radius: 2px;
		color: #16a9ff;
		line-height: 0;
		height: 15px;
		line-height: 15px;
		overflow: hidden;
		font-size: 10px;
		padding: 0 2px;
	}
	
	.star {
		height: 11px;
		font-size: 11px;
		color: #ffa14e;
	}
	
	.volume {
		font-size: 11px;
		height: 11px;
	}
	
	.sendinfo span {
		font-size: 11px;
		color: #999999;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}
	
	.activity p i {
		display: inline-block;
		padding: 0 2px;
		margin-right: 4px;
		border-radius: 2px;
		color: #ffffff;
		height: 14px;
		line-height: 14px;
		font-size: 10px;
	}
	
	.Coupons i {
		background: #FF6C57;
	}
	
	.fullCut i {
		background: #5FBC65;
	}
	
	.fullFolding i {
		background: #72bb00;
	}
	
	.activity p {
		padding-bottom: 10px;
	}
	
	.activity p span {
		font-size: 11px;
	}
	
	.activity {
		overflow: hidden;
		position: relative;
		margin-top: 10px;
		padding-top: 10px;
		border-top: 1px dotted #ccc
	}
	
	.activity1 {
		height: 50px;
	}
	
	.activity2 {
		height: auto;
		overflow: visible;
	}
	
	.activity>span {
		position: absolute;
		width: 60px;
		height: 50px;
		top: 0;
		right: 0;
	}
	
	.activity span i {
		width: 15px;
		height: 10px;
		position: absolute;
		top: 10px;
		right: 0;
		background: url(/static/img/more.png) no-repeat -1px -183px;
		background-size: 20px 200px;
	}
</style>