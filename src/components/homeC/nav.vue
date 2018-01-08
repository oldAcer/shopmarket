<template>
	<a class="nava">
		<img :src="csrc"/>
		<p>{{title}}</p>
	</a>
</template>

<script>
	export default {
		props:["csrc","title"]
	}
</script>

<style>
	.nava{
		width: 100%;
	}
	.nava img{
		width: 80%;
		margin: 0 10%;
	}
	.nava p{
		text-align: center;
		font-size: 12px
	}
</style>