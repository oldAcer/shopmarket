<template>
	<div>
		<li class="orderdetails" v-for="item,index in order">
			<div class="ordertitle">
				<span class="ordername">{{item.shopname}}</span>
				<i class="ordermore"></i>
				<span class="status">{{item.status}}</span>
			</div>
			<div class="ordergoods">
				<ul class="goodscase">
					<li v-for="image,ind in item.img">
						<a :href="'/order/'+item.shopname"><img :src="'/static/img/'+image+'.jpg'" /></a>	
					</li>
				</ul>
				<div class="point"></div>
				<div class="goods-r">
					<span>￥{{item.price}}</span>
					<span class="ordernum">共{{item.num}}件</span>
					<span>{{item.sendway}}</span>
				</div>
			</div>
			<div class="orderfoot">
				<span>{{item.date}}</span>
				<span>{{item.time}}</span>
				<span class="again">再次购买</span>
				<span class="pj">去评价</span>
			</div>
		</li>
	</div>
</template>

<script>
    import $ from "jquery";
	export default {
		data() {
			return {
				order: [],
			}
		},
		created() {
			var that = this;
			$.get("https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/order", function(res) {
				that.order = that.order.concat(res.data);
			})
		},
		methods:{
			open(index){
				console.log('11')
				this.$router.push("/order/"+index)
			}
		}
	}
</script>

<style>

</style>