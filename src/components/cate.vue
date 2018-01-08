<template>
	<article>
		<section class="catesearch">
			<div class="insidesearch">
				<i></i>
				<span>搜索附近的商品和门店</span>
			</div>
		</section>
		<mycate></mycate>
		<foot></foot>
	</article>
</template>

<script>
	import mycate from "@/components/itemscateC/mycate";
	import foot from "@/components/homeC/foot";
	export default {
		components:{
			mycate,
			foot,
		},
	}
</script>

<style>
	article {
		width: 100%;
		height: 100%;
	}
	
	article .catesearch {
		position: fixed;
		z-index: 12;
		left: 0;
		right: 0;
		top: 0;
		height: 45px;
		color: #555;
		font-size: 17px;
		line-height: 44px;
		background-color: #fff;
	}
	
	.catesearch .insidesearch {
		position: absolute;
		left: 8px;
		top: 8px;
		right: 8px;
		background: #fff;
		border-radius: 2px;
		border: 1px solid #e6e6e6;
		height: 28px;
		padding: 0 5px 0 20px;
	}
	
	.catesearch .insidesearch >i{
		position: absolute;
		top: 0;
		left: 0;
		width: 44px;
		height:100%;
		background-image: url(//static-o2o.360buyimg.com/daojia/new/images/icon/search_bar_sprites.png);
		background-size: 44px auto;
		background-repeat: no-repeat;
		background-position: -8px -8px;
	}
	.catesearch .insidesearch > span{
		padding: 0 20px;
	    font-size: 14px;
	    height: 28px;
	    width: 100%;
	    line-height:28px;
	    width: 100%;
	    display: block;
	    box-sizing: border-box;
	}
</style>