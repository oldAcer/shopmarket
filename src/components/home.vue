<template>
	<div class="item">
		<header>
			<myhead></myhead>
		</header>
		<article>
			<section class="banner-container">
				<banner></banner>
			</section>
			<section class="nav">
				<ul>
					<li v-for="item,index in navlist">
						<mynav :csrc="item.csrc" :title="item.title" :key="index"></mynav>
					</li>
				</ul>
			</section>
			<section class="advertisement">
				<adImg :csrc='adImgSrc[0]'></adImg>
			</section>
			<section class="advertisement">
				<adImg :csrc='adImgSrc[1]'></adImg>
			</section>
			<section class="showcase">
				<showcase></showcase>
			</section>
			<section class="shopCategory">
				<shopcategory></shopcategory>
			</section>
			<section class="advertisement">
				<adImg :csrc='adImgSrc[2]'></adImg>
			</section>
			<section class="shopItems">
					<shopitems></shopitems>	
			</section>
		</article>
		<foot></foot>
	</div>
</template>

<script>
	import foot from '@/components/homeC/foot'
	import myhead from '@/components/homeC/head'
	import mynav from '@/components/homeC/nav'
	import showcase from '@/components/homeC/showcase'
	import adImg from '@/components/homeC/adImg'
	import shopcategory from '@/components/homeC/shopCategory'
	import shopitems from '@/components/homeC/shopitems'
	import banner from '@/components/homeC/banner'
	import $ from 'jquery'
	export default {
		name: 'home',
		data() {
			return {
				footlist:[],
				navlist: [],
				adImgSrc: ['adverImg1.jpg', 'adverImg2.jpg', 'adverImg3.jpg']
			}
		},
		components: {
			foot,
			myhead,
			mynav,
			showcase,
			adImg,
			shopcategory,
			shopitems,
			banner,
		},
		mounted: function() {
			var that = this;
			$.get('https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/navlist', function(res) {
				that.navlist = that.navlist.concat(res.data)
			}, 'json');
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.item {
		background-color: #f4f4f4;
	}
	
	.item header{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
	}
	.item .banner-container{
		margin-top: 0;
	}
	.item .nav ul {
		width: 100%;
		display: flex;
		overflow: hidden;
	}
	
	.item .nav ul li {
		width: 25%;
		list-style: none;
		background-color: white;
		padding: 10px 0;
	}
	
	.item article{
		width: 100%;
		margin-bottom: 100px;
	}
	.item section{
		margin-top: 10px;
	}
	.item .showcase {
		background-color: white;
	}
	.item .advertisement{
		width: 100%;
		background: white;
	}
	.item .shopCategory{
		width: 100%;
		overflow: hidden;
	}
	.item .banner-container{
		width: 100%;
		height: 199px;
	}
</style>