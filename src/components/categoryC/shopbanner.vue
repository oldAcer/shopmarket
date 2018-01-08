<template>
	<div class="banner">
		<img src="/static/img/shopitems16.jpg" />
		<div class="bannerinfo">
			<p class="bannername">{{shopName}}</p>
			<p class="bannersend">达达传送|50分钟</p>
			<p class="bannerfreight">基础运费10元</p>
		</div>
		<i class="store"></i>
		<em class="percent"></em>
		<div class="banneractivity">
			<i>满减</i>
			<span>部分商品满25减5</span>
			<div class="moreactivity">
				<span>更多活动</span>
				<i></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shopName: this.$route.params.shopname
			}
		}
	}
</script>

<style>
	.banner {
		padding: 5px 10px;
		width: calc(100% - 20px);
		/*	min-height: 718px;*/
		background: #c87354 url(../../../static/img/store_industry_4.jpg) no-repeat;
		background-size: cover;
		height: 98px;
		position: fixed;
		display: flex;
		color: white;
		flex-wrap: wrap;
	}
	
	.banner .store {
		position: absolute;
		width: 22px;
		height: 18px;
		background-image: url(/static/img/focus.png);
		background-repeat: no-repeat;
		background-position: 0px -2px;
		background-size: 60px auto;
		right: 10px;
		top: 10px;
	}
	
	.banner .percent {
		position: absolute;
		top: 30px;
		right: 10px;
		width: 60px;
		font-size: 11px;
		color: #4a9f37;
		text-align: center;
		height: 32px;
		background-image: url(/static/img/store_sprites_4.6.png);
		background-repeat: no-repeat;
		background-size: 220px auto;
		background-position: -128px -5px;
	}
	
	.banner>img {
		width: 54px;
		height: 55px;
	}
	
	.banner .bannerinfo {
		margin-left: 10px;
	}
	
	.bannerinfo .bannername {
		line-height: 28px;
		font-size: 18px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-top: 1px;
	}
	
	.bannerinfo .bannersend {
		line-height: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 10px;
	}
	
	.bannerinfo .bannerfreight {
		line-height: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 10px;
	}
	
	.banneractivity {
		width: 100%;
		font-size: 10px;
	}
	
	.banneractivity>i {
		display: inline-block;
		padding: 0 2px;
		margin-right: 4px;
		border-radius: 2px;
		color: #ffffff;
		height: 14px;
		line-height: 14px;
		background: #5FBC65;
	}
	.moreactivity{
		float: right;
	}
	.moreactivity i{
		    display: inline-block;
    width: 18px;
    height: 10px;
    text-align: right;
        background-image: url(/static/img/store_sprites_4.6.png);
    background-repeat: no-repeat;
    background-size: 220px auto;
        background-position: -148px -148px;
	}
</style>