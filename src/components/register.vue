<template>
	<div>
		<div id="header">
			<login-regiter :htext="htext"/>
		</div>
		<div id="content">
			<div class="reg-content">
				<div class="reg-search">
					<label>+86<i class="fa fa-caret-down"></i></label>
					<input type="text" placeholder="请输入手机号">
				</div>
				<div class="reg-valid">
					<img src="../../static/img/register/init.gif" alt="">
					<span>点击完成验证</span>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	import loginRegiter from '@/components/login-regiter.vue'
	import $ from 'jquery'
	export default{
		data:function(){
			return{
				htext:'京东注册'
			}
		},
		components:{
			'login-regiter':loginRegiter,
		}
	}
</script>
<style scoped>
	#header{
		height:45px;
	}
	#content{
		min-height: 680px;
		background:#f7f7f7;
		height:auto;
	}
	.reg-content{
		height:auto;
		width:100%;
		padding:15px;
	}
	.reg-search{
		margin:15px 0;
		height:45px;
		width:100%;
		background:white;
		padding: 0 5px;
		border-radius: 2px;
	}
	.reg-search label{
		font-size:14px;
		color:#333;
		width:62px;
		text-align: right;
	}
	.reg-search label i{
		font-size:8px;
		color:#ababab;
		padding:4px;
	}
	.reg-search input{
		height:100%;
		outline:0;
		border: 0;
	}
	.reg-valid{
		height:45px;
		width:100%;
		border-radius: 2px;
		background:white;
		border:1px solid #409eff;
	}
	.reg-valid img{
		height: 30px;
		width:40px;
		padding: 0 9px;
	}
	.reg-valid span{
		font-size: 14px;
		color:#409eff;
		line-height:45px;
	}
</style>