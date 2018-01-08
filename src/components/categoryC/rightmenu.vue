<template>
	<li class="goodinfo">
		<ul v-for="item,index1 in rightMenuList.smenu" class="goods-des">
			<p :id="item.id">{{item.smenutitle}}</p>
			<li v-for="info,index2 in item.goods" :id="info.guid">
				<div @click="open(info.id)" class="g">
					<img :src="'/static/img/'+info.img+'.jpg'" />
					<div class="gt">
						<p class="goodsName">{{info.goodsName}}</p>
						<p class="goodsAppraise"><span>月售{{info.volumn}}件</span> | <span>好评{{info.appraise}}%</span></p>
						<p class="goodsActivity"><span :class="{'col1':info.activity=='直降','col2':info.activity=='秒杀'}">{{info.activity}}</span></p>
						<p class="goodPrice">
							<i>￥</i>
							<span>{{info.sprice}}</span>
							<i>￥</i>
							<del>{{info.price}}</del>
						</p>
					</div>
					<div class="box">
						<p v-if="nums[info.id]">
							<span class="sub" @click.stop="sub(info)"></span>
							<i class="nums">{{nums[info.id]}}</i>
						</p>
						<span class="add" @click.stop="add(info)"></span>
					</div>

				</div>
			</li>
		</ul>
	</li>
</template>

<script>
	import store from "storejs";
	export default {
		props: ["rightMenuList","nums"],
		methods: {
			sub(info) {
				this.$root.pub.$emit('subGoods', info)
			},
			add(info) {
				this.$root.pub.$emit('addGoods', info)
			},
			open(url) {
				this.$router.push("/goods/"+url)
			}
		},
	}
</script>

<style>
	.goodinfo {
		width: 100%
	}
	
	.goodinfo .goods-des {
		width: 100%;
		position: relative;
		padding-top: 30px;
	}
	
	.goods-des>p {
		position: absolute;
		top: 0px;
		color: #666666;
		font-size: 12px;
		line-height: 30px;
		background-color: #f4f4f4;
		padding-left: 10px;
		width: 100%;
		box-sizing: border-box;
	}
	
	.goods-des li {
		width: 100%;
	}
	
	.goods-des li .g {
		width: calc(100% - 20px);
		display: block;
		border-bottom: 1px solid #e8e8e8;
		height: auto;
		padding: 10px;
		color: #333;
		display: flex;
		position: relative;
	}
	
	.g img {
		width: 65px;
		height: 65px;
		display: block;
		padding-top: 4px;
	}
	
	.gt {
		padding-left: 10px;
	}
	
	.gt .goodsName {
		font-size: 14px;
		color: #333;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-left: 5px;
		max-height: 42px;
		line-height: 21px;
	}
	
	.goodsAppraise {
		font-size: 11px;
		padding-left: 5px;
		overflow: hidden;
		padding-top: 3px;
		padding-bottom: 1px;
		color: #999;
	}
	
	.goodsActivity {
		padding-left: 5px;
		overflow: hidden;
		padding-top: 3px;
		padding-bottom: 1px;
	}
	
	.goodsActivity span {
		border-radius: 2px;
		display: inline-block;
		padding: 1px 2px;
		line-height: 14px;
		font-size: 10px;
		color: white;
	}
	
	.goodsActivity .col1 {
		background: #FFCE0B;
	}
	
	.goodsActivity .col2 {
		background: #FF5959;
	}
	
	.goodPrice {
		padding-left: 5px;
		overflow: hidden;
		padding-top: 3px;
		padding-bottom: 1px;
	}
	
	.goodPrice i {
		font-style: normal;
		font-size: 10px;
	}
	
	.goodPrice span {
		font-size: 16px;
		color: #ff3434;
		padding-top: 2px;
		white-space: nowrap;
		display: inline-block;
	}
	
	.goodPrice del {
		font-size: 13px;
		padding-left: 5px;
		color: #999;
		display: inline-block;
	}
	
	.box {
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 16px;
		display: flex;
	}
	
	.box .add,.box .sub {
		padding: 6px;
		width: 28px;
		height: 28px;
	}
	.box p{
		display: flex;
	}
	.box .nums {
		height: 40px;
		line-height: 40px;
	}
	
	.box .add {
		background-position: 0 0;
		background: url(/static/img/addNumSprite.png) no-repeat;
		background-size: 400% 100%;
		background-origin: content-box;
	}
	
	.box .sub {
		background: url(/static/img/addNumSprite.png) no-repeat;
		background-size: 400% 100%;
		background-origin: content-box;
		background-position: -42px 0;
	}
</style>