<template>
	<a class="adImg" href="">
		<img :src="'/static/img/'+csrc"/>
	</a>
</template>

<script>
	export default{
		props:['csrc']
	}
</script>

<style>
	.adImg{
		padding:5px 10px;
		width: calc(100% - 20px);
		display: block;
	}
	.adImg img{
		width: 100%;
		margin: 0;
	}
</style>