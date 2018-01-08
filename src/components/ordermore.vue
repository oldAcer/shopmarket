<template>
	<div class="ordermore">
		<header>
			<div class="mtitle">
				{{res.status}}
				<i></i>
				<span class="mtime">{{res.date}}&nbsp;&nbsp;{{res.time}}</span>
			</div>
			<div class="mpp">
				<span>配送已完成，鼓励一下</span>
				<span class="mgive">¥ 鼓励配送员</span>
				<span class="morestatus">更多状态></span>
			</div>
		</header>
		<div class="morder">
			<div class="mordername">
				<span>{{res.shopname}}</span>
				<span class="morderr"></span>
			</div>
			<div class="mgoods">
				<ul class="goods-l">
					<li v-for='item,index in res.img'><img :src="'/static/img/'+item+'.jpg'" /></li>
				</ul>
				<div class="mpoint"></div>
				<span>共{{res.num}}件<i></i></span>
			</div>
			<div class="mpay">
				<span class="l h">应付</span>
				<span class="l">￥{{res.sprice}}</span>
				<span class="l h">-优惠</span>
				<span class="l">￥50</span>
				<span class="r">￥{{res.price}}</span>
				<span class="r h">实付</span>
			</div>
			<div class="gd"><span>查看更多<i></i></span></div>
			<div class="service">
				<h2>服务承诺</h2>
				<div class="service-d">
					<p>14天包退</p>
					<p>支持订单送达后14天内无理由退货（酒类，电池无质量问题不支持退货）</p>
					<i class="four"></i>
					<i class="mmore"></i>
				</div>
			</div>
			<div class="service send-info">
				<h2>配送信息</h2>
				<div class="send-d">
					<div class="send-time">
						<span class="l">送达时间：</span>
						<span class="r">立即送达（预计 1月1日 16:30）</span>
					</div>
					<div class="send-time">
						<span class="l">收货地址：</span>
						<span class="r">
							李四 177****7625
							<br />
							南京市栖霞区华电社区华电三宿舍22栋32单元405
						</span>
					</div>
					<div class="send-time">
						<span class="l">配送方式：</span>
						<span class="r dd">
							达达专送
						</span>
					</div>
					<div class="send-time">
						<span class="l">配送员  ：</span>
						<span class="r">
							谷兆宇 13951768518
						</span>
					</div>
				</div>
			</div>
			<div class="service send-info order-info">
				<h2>订单信息</h2>
				<div class="send-d">
					<div class="send-time">
						<span class="l">订单号码：</span>
						<span class="r">
							800055886000021
						</span>
					</div>
					<div class="send-time">
						<span class="l">下单时间：</span>
						<span class="r">
						2017-12-30 04:51:05
					</span>
					</div>
					<div class="send-time">
						<span class="l">支付方式：</span>
						<span class="r">
						在线支付
					</span>
					</div>
				</div>
			</div>
		</div>
		<footer>
			<a class="qe">电话<i class="o"></i></a>
			<a class="qe">删除<i class="t"></i></a>
			<a class="qe">售后<i class="th"></i></a>
			<a class="qg">去评价</a>
			<a class="qg">再次购买</a>
		</footer>
	</div>
</template>i

<script>
	import $ from "jquery"
	export default {
		data() {
			return {
				res: '',
			}
		},
		created() {
			var that = this;
			$.get("https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/ordermore", function(res) {
				that.res = res.data
			}, "json")
		},
	}
</script>

<style>
	.ordermore footer {
		position: fixed;
		height: 50px;
		width: 100%;
		z-index: 9999;
		bottom: 0;
		left: 0;
		border-top: 1px solid #d9d9d9;
		background-color: #ffffff;
		display: flex;
	}
	
	.ordermore footer .qg {
		font-size: 15px;
		display: block;
		background: #fff;
		color: #777;
		-webkit-box-flex: 1;
		flex: 1;
		border-left: 1px solid #d9d9d9;
		height: 50px;
		text-align: center;
		line-height: 50px;
	}
	
	.ordermore footer .qe {
		font-size: 13px;
		margin: 5px 15px;
		display: inline-block;
		padding-top: 22px;
		position: relative;
		background: #fff;
		color: #777;
	}
	
	.ordermore footer .qe i {
		display: inline-block;
		background: url(/static/img/order_status_map_icon_v46.png) no-repeat;
		background-size: 467px 152px;
		background-position: -96px -28px;
		width: 20px;
		height: 20px;
		position: absolute;
		top: 0px;
		left: 3px;
	}
	
	.ordermore footer .qe .o {
		background-position: -126px -101px;
	}
	
	.ordermore footer .qe .t {
		background-position: -53px -32px;
	}
	
	.ordermore footer .qe .th {
		background-position: -30px -32px;
	}
	.ordermore .order-info{
		padding-bottom:50px;
	}
	.ordermore .send-time {
		padding: 16px 0;
		position: relative;
	}
	
	.ordermore .send-time .l {
		text-align: left;
		min-width: 70px;
		display: inline-block;
		white-space: nowrap;
		font-size: 13px;
		color: #999;
		vertical-align: top;
	}
	
	.ordermore .send-time .r {
		color: #333;
		max-width: 70%;
		display: inline-block;
		font-size: 13px;
		box-sizing: border-box;
		vertical-align: top;
	}
	
	.ordermore .send-time .dd {
		color: #16a9ff;
		font-size: 12px;
		border: 1px solid #16A9ff;
		border-radius: 2px;
		color: #16A9ff;
	}
	
	.ordermore .send-d {
		padding: 0 10px;
	}
	
	.ordermore .service-d .four {
		position: absolute;
		width: 21px;
		height: 27px;
		background: url(/static/img/5927cbe7N6bb0cdbe.png) no-repeat;
		background-size: cover;
		left: 10px;
		top: 12px;
	}
	
	.ordermore .service-d .mmore {
		position: absolute;
		width: 18px;
		height: 19px;
		background: url(/static/img/iconBg.png) no-repeat center -162px;
		background-size: 18px auto;
		right: 10px;
		top: 24px;
	}
	
	.ordermore .service-d p:nth-child(2) {
		font-size: 11px;
		color: #999;
		white-space: normal;
		line-height: 1.4;
		padding: 0 30px 8px 0;
	}
	
	.ordermore .service-d p:first-child {
		font-size: 13px;
		color: #666;
		padding: 8px 0 5px;
		display: block;
	}
	
	.ordermore .service-d {
		padding-left: 40px;
		background: white;
		position: relative;
	}
	
	.ordermore .service {
		margin-top: 10px;
	}
	
	.ordermore .service h2 {
		padding: 0 10px;
		line-height: 45px;
		font-size: 15px;
		color: #333;
		font-weight: normal;
		background: #f4f4f4;
	}
	
	.ordermore .gd {
		line-height: 45px;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
	
	.ordermore .gd span {
		position: relative;
		padding-right: 20px;
	}
	
	.ordermore .gd span i {
		position: absolute;
		display: block;
		width: 20px;
		height: 20px;
		right: 0;
		top: 0;
		background: url(/static/img/index_icon24.png) no-repeat center -360px;
		background-size: 20px auto;
	}
	
	.ordermore .mpay {
		overflow: hidden;
		line-height: 50px;
		padding: 0 10px;
		font-size: 14px;
		position: relative;
	}
	
	.ordermore .mpay::after {
		height: 1px;
		content: '';
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		position: absolute;
		bottom: 1px;
		right: 0;
		transform: scaleY(0.5);
		z-index: 10;
	}
	
	.ordermore .mpay span {
		margin: 0 5px;
	}
	
	.ordermore .mpay .h {
		color: #999;
	}
	
	.ordermore .mpay .l {
		float: left;
	}
	
	.ordermore .mpay .r {
		float: right;
	}
	
	.ordermore .mgoods {
		overflow: hidden;
		position: relative;
	}
	
	.ordermore .mgoods .mpoint {
		background: url(/static/img/headermore.png) 0 center no-repeat;
		background-size: 22px 5px;
		width: 40px;
		height: 40px;
		margin-top: 26px;
		float: left;
	}
	
	.ordermore .mgoods span {
		float: right;
		margin-right: 10px;
		margin-top: 35px;
		font-size: 11px;
		color: #333;
	}
	
	.ordermore .mgoods span i {
		display: inline-block;
		width: 18px;
		height: 19px;
		background: url(/static/img/iconBg.png) no-repeat center -162px;
		background-size: 18px auto;
	}
	
	.ordermore .goods-l {
		width: 224px;
		height: 92px;
		overflow: hidden;
		padding: 0 10px;
		float: left;
	}
	
	.ordermore .goods-l li {
		width: 56px;
		height: 72px;
		list-style: none;
		float: left;
		padding: 10px 0;
	}
	
	.ordermore .goods-l li img {
		margin-top: 10px;
		width: 52px;
		height: 52px;
	}
	
	.ordermore .morder {
		margin-top: 10px;
		background: white;
	}
	
	.ordermore .morderr {
		position: absolute;
		width: 18px;
		height: 19px;
		background: url(/static/img/iconBg.png) no-repeat center -162px;
		background-size: 18px auto;
		right: 10px;
		top: 8px;
	}
	
	.ordermore .mordername {
		font-size: 15px;
		background-color: #fff;
		padding: 10px;
		position: relative;
		color: #333;
	}
	
	.ordermore .mgoods::after {
		height: 1px;
		content: '';
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		position: absolute;
		bottom: 1px;
		right: 0;
		transform: scaleY(0.5);
		z-index: 10;
	}
	
	.ordermore .mordername::after {
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
	
	.ordermore {
		background: #f4f4f4;
		position: relative;
		padding-bottom: 52px;
		height: 100%;
	}
	
	.ordermore header {
		position: relative;
		padding: 20px 10px 10px;
		margin-bottom: 10px;
		background: #fff;
	}
	
	.ordermore .mtitle {
		position: relative;
		font-size: 17px;
		padding: 0 80px 0 35px;
		position: relative;
		width: calc(100% - 115px);
	}
	
	.ordermore .mtitle>i {
		vertical-align: -7px;
		position: absolute;
		left: 0;
		top: 0;
		display: inline-block;
		background: url(/static/img/order_status_map_icon_v46.png) no-repeat;
		background-size: 467px 152px;
		width: 27px;
		height: 27px;
		background-position: -96px -28px;
	}
	
	.ordermore .mtime {
		right: 0;
		top: 5px;
		font-size: 13px;
		position: absolute;
		color: #999;
	}
	
	.ordermore .mpp {
		font-size: 13px;
		color: #999;
		position: relative;
		display: flex;
		flex-direction: column;
		align-content: center;
		margin: 5px 0px 0 37px;
	}
	
	.ordermore .mgive {
		font-size: 13px;
		color: #fb8217;
		padding: 5px;
		border: 1px solid #fb8217;
		border-radius: 5px;
		margin: 10px 0 5px 0;
		width: 90px;
		box-sizing: border-box;
	}
	
	.ordermore .morestatus {
		color: #47b34f;
		position: absolute;
		right: 10px;
		top: 0px;
		font-size: 14px;
	}
</style>