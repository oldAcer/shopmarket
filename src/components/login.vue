<template>
	<div class="login">
		<header>
			<i></i>
			<span>京东登录</span>
		</header>
		<section class="loginway">
			<div class="identity">
				<span @click="toggle('identity')" :class="{'line':isA}">账号密码登录</span>
			</div>
			<div class="phone">
				<span @click="toggle('phone')" :class="{'line':!isB}">短信验证码登录</span>
			</div>
		</section>
		<component :is='way'></component>
		<section class="loginbtns">
			<a class="loginbtn">登 录</a>
			<a class="oneloginbtn">一键登录</a>
		</section>
		<section class="loginnav">
			<a class="forget">
				<i></i>
				<span>忘记密码</span>
			</a>
			<a class="quick">
				<span>手机快速注册</span>
				<i></i>
			</a>
		</section>
		<section class="anthoerway">
			<span>其他登录方式</span>
			<i class="qq"></i>
			<i class="wx"></i>
			<p>
				登录即代表您已同意 
				<a>京东隐私政策</a>
			</p>
		</section>
	</div>
</template>

<script>
	import phone from '@/components/login/phone'
	import identity from '@/components/login/identity'
	export default {
		data() {
			return {
				way: 'phone',
				isA:true,
				isB:true,
			}
		},
		components: { 
			identity,
			phone
		},
		methods:{
			toggle(val){
				this.way=val;
				if(val=='phone'||this.isA==true){
					this.isA = false;
					this.isB=false;
				}else if(val=='identity'||this.isB==false){
					this.isA = true;
					this.isB=true;
				}
			}
		}
	}
</script>

<style>   
	.login header {
		height: 45px;
		line-height: 45px;
		background: #f9f9f9;
		color: #616161;
		font-size: 17px;
		border-bottom: 1px solid #bbb;
		z-index: 999;
		text-align: center;
		position: relative;
	}
	
	.login header i {
		width: 22px;
		height: 22px;
		position: absolute;
		background: url(/static/img/iconBg.png) no-repeat;
		background-size: 100% auto;
		top: 12px;
		left: 12px;
		background-position: 0 -63px;
	}
	
	.login .loginway {
		width: 100%;
		display: flex;
		border-bottom: 1px solid #d7d7d7;
	}
	
	.login .loginway>div {
		width: 50%;
		font-size: 14px;
		height: 44px;
		text-align: center;
	}
	
	.login .loginway>div>span {		
		padding: 0 10px;
		height: 100%;
		display: inline-block;
		box-sizing: border-box;
		line-height: 44px;
	}
	.login .loginway>div>.line{
		border-bottom: 2px solid #f23030;
	}
	.login .loginbtns {
		margin: 0 20px;
		overflow: hidden;
	}
	
	.login .loginbtn {
		height: 45px;
		line-height: 45px;
		background-color: #eee;
		border-radius: 2px;
		border: 0;
		color: #848689;
		display: block;
		text-align: center;
		margin: 10px 0;
	}
	
	.login .oneloginbtn {
		height: 45px;
		line-height: 45px;
		background-color: #fff;
		border-radius: 2px;
		border: 0;
		color: #f23030;
		display: block;
		text-align: center;
		border: 1px solid #f23030;
	}
	
	.login .loginnav {
		display: flex;
		margin-top: 20px;
		width: calc(100% - 40px);
		padding: 0 20px;
	}
	
	.login .loginnav a span {
		font-size: 12px;
		line-height: 22px;
		padding: 0 2px;
	}
	
	.login .loginnav a {
		display: flex;
		width: 50%;
	}
	
	.login .forget i {
		display: block;
		width: 22px;
		height: 22px;
		background-image: url(/static/img/iconBg.png);
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: 0 -23px;
	}
	
	.login .quick i {
		display: block;
		width: 22px;
		height: 22px;
		background-image: url(/static/img/iconBg.png);
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: 0 -42px;
	}
	
	.login .quick {
		display: flex;
		flex-direction: row-reverse;
	}
	.login .quick span{
		color: #000000;
	}
	.login .anthoerway {
		width: calc(100% - 60px);
		padding: 24.5px 30px 0;
		position: relative;
		margin-top: 105px;
		border-top: 1px solid #d7d7d7;
	}
	
	.login .anthoerway span {
		position: absolute;
		top: -19px;
		padding: 5px 15px;
		left: 50%;
		transform: translateX(-50%);
		color: #bfbfbf;
		background-color: white;
		font-size: 14px;
	}
	
	.login .anthoerway .qq {
		display: block;
		width: 22px;
		height: 22px;
		background-image: url(/static/img/iconBg.png);
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: 0 -129px;
		position: absolute;
		top: 40px;
		left: 150px;
	}
	
	.login .anthoerway .wx {
		display: block;
		width: 22px;
		height: 22px;
		background-image: url(/static/img/iconBg.png);
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: 0 -155px;
		position: absolute;
		top: 40px;
		right: 150px;
	}
	
	.login .anthoerway p {
		font-size: 14px;
		line-height: 30px;
		margin-top: 60px;
		text-align: center;
	}
	
	.login .anthoerway p a {
		color: #333;
		text-decoration: underline;
	}
</style>