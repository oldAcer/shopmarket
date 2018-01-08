<template>
	<div class="identityC">
		<div class="account">
			<label for="account">账号</label>
			<input type="text" id="account" placeholder="用户名/邮箱/已验证手机" />
		</div>
		<div class="password">
			<label for="password">密码</label>
			<input type="text" id="password" placeholder="请输入密码" />
			<i></i>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.identityC {
		width: calc(100% - 40px);
		display: flex;
		flex-direction: column;
		padding: 0 20px 20px 20px;
	}
	
	.identityC>div {
		width: 100%;
		height: 48px;
		line-height: 48px;
		background-color: #fff;
		border-bottom: 1px solid #d7d7d7;
		font-size: 14px;
	}
	
	.identityC>div label {
		color: #333;
	}
	
	.identityC>div input {
		width: 60%;
		padding-left: 30px;
		outline: none;
		border: none;
		height: 30px;
	}
	.password{
		position: relative;
	}
	.password>i {
		display: block;
		width: 30px;
		height: 18px;
		background-image: url(/static/img/hide_password.png);
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-clip: padding-box;
		color: #fff;
		position: absolute;
		bottom: 15px;
		right: 0;
	}
</style>