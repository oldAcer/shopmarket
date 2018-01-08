<template>
	<li class="cate">
		<ul>
			<li v-show="rightcate.ishow" v-for="item,index in rightcate.total" class="cateitems" :key="index">
				<p :id="item.id">{{item.title}}</p>
				<div class="catebox">
					<a v-for="it,ind in item.goods " href="">
						<img :src="'/static/img/cate'+it.img+'.jpg'" />
						<p>{{it.goodsname}}</p>
					</a>
				</div>
			</li>
		</ul>
	</li>
</template>

<script>
	export default {
		data() {
			return {
				cate: []
			}
		},
		props: ["rightcate"],
	}
</script>

<style>
	.catebox {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	
	.catebox>a {
		width: 33%;
		height: 95px;
		display: block;
		text-align: center;
	}
	
	.catebox a img {
		width: 62px;
		height: 62px;
	}
	
	.catebox a p {
		width: 100%;
		font-size: 12px;
		color: #7d7d7d;
		padding: 8px 0;
	}
	
	.cateitems>p {
		height: 19px;
		margin-top: 9px;
		margin-bottom: 9px;
		margin-left: 7%;
		line-height: 19px;
		font-size: 13px;
		color: #666666;
	}
</style>