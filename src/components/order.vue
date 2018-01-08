<template>
	<div class="order">
		<ul class="orderlist">
			<orderdetails></orderdetails>
		</ul>
		<foot></foot>
	</div>
</template>

<script>
	import foot from "@/components/homeC/foot";
	import orderdetails from "@/components/orderC/orderdetails";
	export default {
		components: {
			foot,
			orderdetails,			
		}
	}
</script>

<style>
	.order {
		background-color: #f4f4f4;
		min-height: calc(100% - 50px);
		border-bottom: 50px;
	}
	
	.orderlist {
		width: 100%;
	}
	
	.orderdetails {
		width: calc(100% - 20px);
		padding: 0 10px;
		margin-bottom: 10px;
		background-color: white;
		color: #484848;
		display: flex;
		flex-direction: column;
	}
	
	.ordertitle {
		width: 100%;
		height: 40px;
		line-height: 40px;
		position: relative;
		font-size: 14px;
	}
	
	.ordertitle::after {
		height: 1px;
		content: '';
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		position: absolute;
		bottom: -1px;
		right: 0;
		transform: scaleY(0.5);
		z-index: 10;
	}
	
	.ordername {
		float: left;
	}
	
	.ordermore {
		background: url(/static/img/m.png) no-repeat;
		width: 10px;
		height: 18px;
		background-size: 10px auto;
		float: left;
		margin-top: 12px;
		margin-left: 10px;
	}
	
	.status {
		float: right;
		font-size: 13px;
	}
	
	.ordergoods {
		width: 100%;
		padding: 10px 0;
		position: relative;
	}
	
	.ordergoods::after {
		height: 1px;
		content: '';
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		position: absolute;
		bottom: -1px;
		right: 0;
		transform: scaleY(0.5);
		-webkit-transform: scaleY(0.5);
		z-index: 10;
	}
	
	.ordergoods .goodscase {
		overflow: hidden;
		height: 72px;
		width: 224px;
		float: left;
	}
	
	.ordergoods .goodscase li {
		float: left;
		list-style: none;
		height: 72px;
	}
	
	.goodscase li::after {
		clear: both;
		content: '';
	}
	
	.goodscase li img {
		width: 52px;
		height: 52px;
	}
	
	.point {
		width: 52px;
		height: 72px;
		background: url(/static/img/headermore.png) 0 26px no-repeat;
		background-size: 22px 5px;
		float: left;
	}
	
	.goods-r {
		display: flex;
		flex-direction: column;
		float: right;
		justify-content: space-around;
		height: 72px;
	}
	
	.goods-r span:first-child {
		font-size: 16px;
		color: #ff5a5e;
	}
	
	.goods-r .ordernum {
		font-size: 11px;
		color: #333;
		text-align: center;
	}
	
	.goods-r span:last-child {
		padding: 2px;
		font-size: 10px;
		color: #16a9ff;
		border: 1px solid #16A9ff;
		border-radius: 2px;
		height: 15px;
		display: inline-block;
		text-align: center;
	}
	
	.orderfoot {
		line-height: 45px;
		font-size: 14px;
		color: #484848;
	}
	
	.orderfoot span {
		float: left;
		margin-left: 10px;
	}
	
	.orderfoot .pj {
		display: inline-block;
		margin-left: 10px;
		padding: 6px 8px;
		color: #333;
		border: 1px solid #d9d9d9;
		border-radius: 2px;
		text-align: center;
		font-size: 14px;
		line-height: 1;
		float: right;
		margin-top: 8px;
	}
	
	.orderfoot .again {
		display: inline-block;
		margin-left: 10px;
		padding: 6px 8px;
		color: #333;
		border: 1px solid #d9d9d9;
		border-radius: 2px;
		text-align: center;
		font-size: 14px;
		line-height: 1;
		float: right;
		margin-top: 8px;
	}
	
</style>