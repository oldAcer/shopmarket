<template>
	<div class="container">
		<header>
			<span></span>
			<div class="perinfo">
				<p class="pername">jd_175857nwxi<i></i></p>
				<p class="perphone">175****5842<i></i></p>
			</div>
			<i class="tdcode"></i>
			<i class="permessage"></i>
			<i class="vip"></i>
		</header>
		<section class="userwallet">
			<ul>
				<li class="wallet">
					<i><img src="/static/img/icon_packet.png"/></i>
					<span>我的钱包</span>
				</li>
				<li>
					<i>10</i>
					<span>优惠券</span>
				</li>
				<li>
					<i>--</i>
					<span>白条</span>
				</li>
			</ul>
		</section>
		<section class="redpacket">
			<img src="/static/img/5a1b7aadN8268f0a1.png" />
		</section>
		<section class="peritem">
			<ul>
				<li v-for='item,index in personal' class="pl">
					<img :src="'/static/img/personal'+item.img+'.png'" />
					<span>{{item.text}}</span>
				</li>
			</ul>
		</section>
		<section class="exit">
			<a href="/login">退出</a>
		</section>
		<foot></foot>
	</div>

</template>

<script>
	import $ from 'jquery'
	import foot from "@/components/homeC/foot"
	export default {
		data() {
			return {
				personal: []
			}
		},
		created() {
			var that = this;
			$.get("https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/personal", function(res) {
				that.personal = that.personal.concat(res.data)
			}, "json")
		},
		components: {
			foot,
		}
	}
</script>

<style>
	.container {
		font-family: 'Microsoft YaHei', Verdana, Arial, Helvetica, sans-serif;
		color: #3c3c3c;
		font-size: 14px;
		line-height: 1.4;
		background-color: #f4f4f4;
		word-wrap: break-word;
		height: 100%;
	}
	
	.container header {
		background: #fff url(/static/img/my_bgnew.png) center bottom no-repeat;
		width: 100%;
		min-height: 120px;
		display: flex;
		position: relative;
		background-size: cover;
	}
	
	.container header>span {
		display: inline-block;
		width: 61px;
		height: 61px;
		margin: 24px 0 0 16px;
		border-radius: 50px;
		vertical-align: middle;
		text-align: center;
		background: url(/static/img/bg_head_new_light.png) no-repeat;
		background-size: auto 61px;
	}
	
	.container header .perinfo {
		color: white;
		margin: 35px 0 0 10px;
	}
	
	.container .pername {
		font-size: 14px;
	}
	
	.container .perphone {
		font-size: 16px;
	}
	
	.container .pername i {
		background-image: url(/static/img/vip_icon_light.png);
		background-size: 17px;
		background-repeat: no-repeat;
		background-position: 0 6px;
		margin-left: 4px;
		padding: 5px 5px 4px 21px;
	}
	
	.container .perphone i {
		display: inline-block;
		width: 14px;
		height: 14px;
		margin-left: 10px;
		background: url(/static/img/icon_edit.png) no-repeat;
		background-size: 14px 14px;
	}
	
	.container .tdcode {
		width: 22px;
		height: 22px;
		background: url(/static/img/icon_er.png) no-repeat;
		background-size: 22px;
		position: absolute;
		right: 50px;
		top: 15px;
	}
	
	.container .permessage {
		width: 22px;
		height: 22px;
		background: url(/static/img/user_message_icon.png) no-repeat;
		background-position: center center;
		background-size: 22px;
		position: absolute;
		right: 15px;
		top: 15px;
	}
	
	.container .vip {
		width: 102px;
		height: 65px;
		background: url(/static/img/vip_centernew@2x.png) no-repeat;
		background-size: 102px 65px;
		position: absolute;
		right: 0;
		bottom: 3px;
	}
	
	.container .userwallet {
		position: relative;
		width: 100%;
		height: 70px;
	}
	
	.container .userwallet ul {
		width: 100%;
		height: 100%;
		display: flex;
		background: white;
		list-style: none;
	}
	
	.container .userwallet ul li {
		width: 33%;
		text-align: center;
		height: 100%;
		padding-top: 10px;
		box-sizing: border-box;
	}
	
	.userwallet>ul>li>i {
		display: block;
		width: 100%;
		height: 30px;
	}
	
	.userwallet ul>li>span {
		line-height: 25px;
		text-align: center;
		font-size: 12px;
		color: #323232;
	}
	
	.wallet i img {
		width: 25px;
		height: 25px;
	}
	
	.redpacket {
		width: 100%;
		height: 75px;
		margin-top: 10px;
	}
	
	.redpacket img {
		width: 100%;
		height: 100%;
	}
	
	.peritem {
		width: 100%;
		margin-top: 10px;
		background: white;
	}
	
	.peritem ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
	}
	
	.peritem ul li {
		width: 25%;
		padding: 1px 0 25px 0;
		border-bottom: 1px solid #e8e8e8;
		line-height: 35px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.pl img {
		width: 47px;
		height: 47px;
	}
	
	.exit {
		margin-top: 10px;
	}
	
	.exit a {
		display: block;
		height: 46px;
		color: #ff5757;
		text-align: center;
		font-size: 16px;
		line-height: 46px;
		background-color: #fff;
	}
</style>