<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item,index in img"><img :src="'/static/img/banner'+item+'.jpg'" /></div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from "swiper"
	import "../../assets/swiper.min.css";
	
	
	export default {
		data() {
			return {
				img: [1, 2, 3, 4, 5]
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container', {
				loop: true,
				autoplay:true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
			})
		}
	}
</script>

<style>
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide img {
		width: 100%;
		height: 100%;
	}
</style>