<template>
	<div class="contain">
		<div class="title">
			<p>更多</p>
		</div>
		<div class="showcase-component">
			<a v-for="item,index in showcaselist" :key='index' href="" class="goods">
				<img :src="'/static/img/item'+item.img+'.jpg'"/>
				<p>{{item.title}}</p>
				<span>￥<i>{{item.sprice}}</i></span>
				<del>￥<i>{{item.price}}</i></del>
			</a>
			<a class="more" href="">
				查看更多
			</a>
		</div>
		
	</div>
</template>

<script>
	import $ from 'jquery'
	export default{
		data:function(){
			return {
				showcaselist:[],
			}
		},
		mounted:function(){
			var that = this
			$.get('https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/showcaselist',function(res){
				that.showcaselist = that.showcaselist.concat(res.data)
			},"json")
		}
	}
</script>

<style>
	.contain{
		margin-top: 10px;
	}
	.title{
		width: calc(100% - 20px);
		padding: 5px 10px;
		background:url(/static/img/seckill-title.png) no-repeat 10px center;
		background-size:auto 20px;
		height: 30px;
		font-size: 14px;
	}
	.title p{
		padding-right:10px;
		height: 100%;
		line-height: 30px;
		background: url(/static/img/seckill-right.png) no-repeat right center;
		float: right;
		background-size: auto 15px; 
		color: #ff5757;
	}
	.showcase-component{
		padding: 10px 10px 5px 0;
		width:calc(100% - 10px);
		overflow-x: auto;
		white-space: nowrap;
	}
	.showcase-component > .more{
		display: inline-block;
		padding-left:30px;
		padding-right: 5px;
		width: 12px;
		font-size:12px;
		color: #999;
		background: url(/static/img/seckill-more.png) no-repeat 0 center;
		background-size: auto 20px;
		white-space: normal;
		position: relative;
		bottom: 50px;
	}
	.showcase-component .goods{
		width: 20%;
		height:auto;
		margin-left: 10px;
		display: inline-block;
	}
	.showcase-component .goods p{
		width: calc(100% - 10px);
		height: 11px;
		font-size:10px;
		height: auto;
		background: rgba(255,87,87,0.6);
    	padding: 1px 5px;
    	position: relative;
    	top: -10px;
    	border-radius: 10px;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	color: white;
    	
	}
	.showcase-component .goods img{
		width: 90%;
		margin: 0 5%;		
	}
	.showcase-component .goods span,.showcase-component .goods del{
		display: block;	
		text-align: center;
	}
	.showcase-component .goods del{
		    font-size: 12px;
		    color: #555;
	}
	.goods del i{
		font-size: 12px;
	}
	.showcase-component .goods span{
		color: #ff5757;	
		text-align: center;
		margin-top: -10px;
	}
	.goods span i{
		font-size: 16px;
    	font-weight: bold;
	}
</style>