<template>
	<div class="mycart">
		<!--<div class="cartempty">
			<div class="bg">
				<p>购物车空空如也哦~</p>
				<a href="/">去首页逛逛</a>
			</div>
		</div>-->
		<div class="outside">
			<div class="address">弓箭坊40号(当前位置)</div>
		</div>
		<ul class="goodsInCart">
			<li class="itemInCart" v-for="item,index in bufferCart" :key="index">
				<a :href="'shopinfo/'+item.shopId+'/'+item.shopName">{{item.shopName}}</a>
				<ul class="goodsc">
					<li v-for="goods,ind in item.goodsinfo" :key="ind">
						<img :src="'/static/img/'+goods.img+'.jpg'" />
						<span>￥{{goods.sprice}}</span>
						<i>{{goods.num}}</i>
					</li>
				</ul>
			</li>
		</ul>
		<foot></foot>
	</div>

</template>

<script>
	import foot from "@/components/homeC/foot";
	import store from "storejs";
	if(!store.has("cart")){
		store.set("cart",{})
	}
	export default {
		data() {
			return {
				bufferCart: '',
			}
		},
		components: {
			foot,
		},
		created() {
			this.bufferCart = store.get("cart")
			console.log(this.bufferCart!='')
		}
	}
</script>

<style>
	.mycart {
		width: 100%;
		text-align: center;
		padding: 0 0 50px 0;
		background-color: #f4f4f4;
		height: calc(100% - 50px);
	}
	
	.cartempty {
		height: 100%;
		width: 100%;
		background: white;
	}
	
	.cartempty .bg {
		width: 100%;
		min-height: 531px;
		background: url(/static/img/cart_empty.png) no-repeat center;
		background-size: 96px;
		overflow: hidden;
	}
	
	.bg p {
		margin-top: calc(50% + 120px);
		font-size: 15px;
		line-height: 1;
		color: #666;
	}
	
	.bg a {
		display: inline-block;
		margin-top: 8px;
		padding: 10px 8px;
		border-radius: 3px;
		border: 1px solid #47b34f;
		color: #47b34f;
		background: #fff;
		line-height: 1;
	}
	
	.outside {
		display: inline-block;
		padding: 6px 7px;
		border-radius: 28px;
		background-color: #d1e7d3;
		margin: 15px auto 10px;
		line-height: 28px;
	}
	
	.outside .address {
		display: inline-block;
		line-height: 26px;
		padding: 0 14px 0 31px;
		border-radius: 22px;
		font-size: 16px;
		color: #fff;
		background: #47b34f url(/static/img/loc2.png) 13px center no-repeat;
		background-size: 10px 12px;
	}
	
	.goodsInCart>li {
		position: relative;
		margin: 0 6px 7px 6px;
		text-align: left;
		height: 141px;
		padding: 3px 4% 10px 1.6%;
		background: url(/static/img/gc.png) 0 0 no-repeat;
		background-size: 100% 154px;
	}
	
	.itemInCart a {
		position: relative;
		padding-left: 10px;
		display: block;
		line-height: 44px;
		height: 147px;
		color: #333;
		font-size: 15px;
		background: url(/static/img/m.png) right 17px no-repeat;
		background-size: 7px 11px;
		z-index: 3;
	}
	
	.itemInCart .goodsc {
		position: absolute;
		left: 15px;
		z-index: 2;
		height: 92px;
		padding: 1px 0 0 0;
		bottom: 0;
		list-style: none;
		display: flex;
	}
	
	.goodsc li {
		height: 83px;
		width: 53px;
		margin-right: 10px;
		text-align: center;
		font-size: 12px;
		color: #333;
		position: relative;
	}
	
	.goodsc li img {
		display: block;
		width: 53px;
		height: 53px;
		border-radius: 5px;
	}
	
	.goodsc li span {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		font-size: 12px;
		line-height: 30px;
		color: #333;
	}
	
	.goodsc li i {
		position: absolute;
		right: 0;
		top: -1px;
		min-width: 18px;
		height: 18px;
		text-align: center;
		color: #ffffff;
		font-size: 10px;
		line-height: 18px;
		border-radius: 50%;
		background-color: #ff5757;
		vertical-align: middle;
	}
</style>