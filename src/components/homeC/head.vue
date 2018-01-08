<template>
	<nav>
		<p class="location">弓箭坊40号邮政管理局</p>
		<a class="more"></a>
		<div class="search">附近商家商品</div>
		<a class="message"></a>
	</nav>
</template>

<script>
</script>

<style>
	*{
		font-size: 14px;
	}
	nav{
		width: 100%;
		height: 56px;
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: url(/static/img/index_black_semi.png) no-repeat;
		background-size:cover ;
	}
	nav .location{
		padding-left: 25px;
		background: url(/static/img/icon_locate.png) no-repeat 5px center;
		background-size: 16px 18px;
		line-height: 56px;
		max-width: 100px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	nav .more{
		width: 25px;
    	height: 20px;
    	background:url(/static/img/index_icon24.png) no-repeat 0px -37px;
    	background-size: 25px;
	}
	nav .search{
		flex: 1;
		margin-left: 25px;
		padding-left: 30px;
		background: url(/static/img/index_icon24.png) no-repeat 5px -55px rgba(255,255,255,0.35);
		background-size:20px;
		height: 30px;
		border-radius:15px;
		line-height: 30px;
	}
	nav .message{
		width: 20px;
		height: 20px;
		background: url(/static/img/index_icon_messagenew.png) no-repeat center center;
    	background-size: 18px 19px;
    	padding: 0 5px;
	}
</style>