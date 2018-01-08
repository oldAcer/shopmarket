<template>
	<li>
		<ul class="poster">
			<li class="discount">
				<p class="sale">
					<span>{{poster.num}}张优惠券</span>
					<span><i v-for="item,index in poster.fullCut">满{{item.full}}减{{item.cut}}</i></span>
				</p>
				<p class="middle"></p>
				<p class="ticket">
					<span>领券</span>
				</p>
			</li>
			<li v-for="item,index in poster.img" class="posterImg"><img :src="'/static/img/poster'+item.src+'.jpg'"/></li>
		</ul>
	</li>
</template>

<script>
	export default {
		props: ["poster"],
	}
</script>

<style>
	.poster {
		width: calc(100% - 18px);
		list-style: none;
		margin: 11px 9px 12px;
	}
	
	.discount {
		width: 100%;
		height: 70px;
		display: flex;
		margin-bottom: 10px;
	}
	
	.discount>p {
		height: 100%;
	}
	
	.discount .sale {
		display: flex;
		padding: 0 10px 0 12px;
		flex-direction: column;
		flex: 1;
		background-color: #fffbfb;
		border-top: 1px solid #ff9d9d;
		border-bottom: 1px solid #ff9d9d;
		box-sizing: border-box;
		border-left: 3px solid #ff5757;
		border-bottom-left-radius: 5px;
		border-top-left-radius: 5px;
	}
	
	.sale span:first-child {
		margin-top: 16px;
		color: #FF5757;
		font-size: 15px;
	}
	
	.sale span:nth-child(2) {
		font-size: 11px;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 4px;
	}
	
	.discount .ticket {
		width: 61px;
		height: 100%;
		border: 1px solid #ff9d9d;
		border-left-width: 0;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		box-sizing: border-box;
		background-color: #fffbfb;
	}
	
	.discount .ticket span {
		display: block;
		width: 50px;
		height: 20px;
		font-size: 13px;
		color: #fefffe;
		text-align: center;
		line-height: 20px;
		margin: 24px auto 0;
		background-color: #ff5757;
		border-radius: 20px;
	}
	.discount .middle{
		width: 10px;
		background: url(/static/img/store.png) no-repeat;
		background-size:auto 100%; 
	}
	.posterImg{
		width:100%;
		margin-bottom: 10px;
	}
	.posterImg img{
		width: 100%;
		height:auto;
	}
</style>