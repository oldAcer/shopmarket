<template>
	<div class="phoneC">
		<div class="ph">
			<label for="">+86<i></i></label>
			<input type="text" placeholder="请输入手机号码" id="phone" />
			<span class="getcode">获取验证码</span>
		</div>
		<div class="code">
			<input type="text" placeholder="请输入收到的验证码" id="code"/>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.phoneC {
		width: calc(100% - 40px);
		display: flex;
		flex-direction: column;
		padding: 0 20px 20px 20px;
	}
	
	.phoneC div {
		width: 100%;
		height: 48px;
		line-height: 48px;
		background-color: #fff;
		border-bottom: 1px solid #d7d7d7;
		font-size: 14px;
		display: flex;
		align-items: center;
	}
	
	.phoneC .ph label {
		display: block;
		width: 62px;
		height: 100%;
		text-align: center;
	}
	
	.ph label i {
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 5px solid #ABABAB;
		display: inline-block;
		margin: 0 7px 0 2px;
		padding-top: 1px;
	}
	.ph > input{
		outline: none;
		border: none;
		width: 200px;	
	}
	.ph .getcode{
		height: 23px;
		color:#848689;
		border-left: 1px solid #d7d7d7;
		line-height: 23px;
		width:118px;
		text-align: center;
	}
	.code input{
		width: calc(100%);
		outline:none;
		border: none;
		padding: 0 5px;
	}
</style>