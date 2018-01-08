<template>
	<div class="shopcart">
		<div class="editcart" v-if="cart.length!=0">
			<span class="allsel" :class="{'allchecked':allCheck,'noallchecked':!allCheck}" @click="allcheck">全选</span>
			<span class="numsel">(已选{{total.num}}件)</span>
			<span class="empty" @click='empty'>清空购物车</span>
		</div>
		<ul class="goodscart">
			<li v-for="item,index in cart" :key="index">
				<span :class="{'checked':isCheck[index],'nochecked':!isCheck[index]}" @click="toggle(index,item.sprice,item.num)"></span>
				<img :src="'/static/img/'+item.img+'.jpg'" />
				<div class="goodsinfo">
					<p class="goodsinfon">{{item.goodsName}}</p>
					<p class="cartactivity">{{item.activity}}</p>
					<div class="cartprice">
						<span>{{item.sprice}}</span>
						<i>{{item.price}}</i>
					</div>
				</div>
				<div class="cartbox">
					<span class="sub" @click="cartsub(index)"></span>
					<i class="nums">{{item.num}}</i>
					<span class="add" @click="cartadd(index)"></span>
				</div>
			</li>
		</ul>

		<div class="mincart">
			<i></i>
			<span v-if="!total.num">购物车是空的</span>
			<span v-if="total.num" class="pay">{{total.pay}}</span>
			<a class="checkOut">结算</a>
		</div>
	</div>
</template>

<script>
	import store from "storejs";
	export default {
		data() {
			return {
				cart: [],
				total: {
					num: 0,
					pay: 0,
				},
				isCheck: [],
				allCheck: true,
			}
		},
		watch: {
			cart(newval, oldval) {
				var cart = store.get("cart");
				cart[this.$route.params.shopid] = {
					shopId: this.$route.params.shopid,
					shopName: this.$route.params.shopname,
					goodsinfo: newval
				}
				store.set("cart", cart);
			}
		},
		methods: {
			cartadd(index) {
				if(this.cart[index].num < this.cart[index].store) {
					this.cart[index].num++;
					this.cart.splice(index, 1, this.cart[index]);
					this.total.pay = parseFloat((parseFloat(this.total.pay) + parseFloat(this.cart[index].sprice)).toFixed(2))
					this.total.num++;
				}

				var nums = {};
				nums[this.cart[index].id] = this.cart[index].num;
				this.$root.pub.$emit("nums", nums);
			},
			cartsub(index) {
				this.cart[index].num--;
				this.cart.splice(index, 1, this.cart[index]);
				var nums = {};
				nums[this.cart[index].id] = this.cart[index].num;
				this.total.pay = parseFloat((parseFloat(this.total.pay) - parseFloat(this.cart[index].sprice)).toFixed(2))
				this.total.num--;
				this.$root.pub.$emit("nums", nums);
				if(this.cart[index].num == 0) {
					this.cart.splice(index, 1)
				}

			},
			toggle(index, sprice, num) {
				this.isCheck[index] = !this.isCheck[index];
				if(this.isCheck[index]) {
					this.total.pay = parseFloat((this.total.pay + sprice * num).toFixed(2))
					this.total.num += num;
				} else {
					this.total.pay = parseFloat((this.total.pay - sprice * num).toFixed(2))
					this.total.num -= num;
				}
				this.isCheck.splice(index, 1, this.isCheck[index])
				for(let i = 0; i < this.isCheck.length; i++) {
					if(!this.isCheck[i]) {
						this.allCheck = false;
						return;
					}
				}
				this.allCheck = true;
			},
			allcheck() {
				this.allCheck = !this.allCheck;
				if(this.allCheck) {
					for(let i = 0; i < this.cart.length; i++) {
						this.total.num += this.cart[i].num;
						this.total.pay += (this.cart[i].sprice * this.cart[i].num)
					}
					this.total.pay = parseFloat(this.total.pay.toFixed(2))
				} else {
					this.total.num = 0;
					this.total.pay = 0;
				}
				for(let i = 0; i < this.isCheck.length; i++) {
					this.isCheck[i] = this.allCheck;
					this.isCheck.splice(i, 1, this.isCheck[i]);
				}
			},
			empty() {
				this.cart = [];
				this.total = {
					num: 0,
					pay: 0,
				};
				var empty =true;
				this.$root.pub.$emit("empty", empty);
				var cartbuffer = store.get("cart");
				delete cartbuffer[this.$route.params.shopid];
				setTimeout(function(){
					store.set("cart", cartbuffer)
				},200)
				
			}
		},
		created() {
			var that = this;
			this.$root.pub.$on("addGoods", function(res) {
				for(let i = 0; i < that.cart.length; i++) {
					if(res.id == that.cart[i].id) {
						if(that.cart[i].num < that.cart[i].store) {
							that.cart[i].num++;
							that.$set(that.cart, i, that.cart[i]);
							var nums = {};
							nums[res.id] = that.cart[i].num;
							that.$root.pub.$emit("nums", nums);
							//购物车总价及数量
							that.total.num++;
							that.total.pay = parseFloat((parseFloat(that.total.pay) + parseFloat(res.sprice)).toFixed(2))
						} else {
							alert("超过最大库存")
						}
						return;
					}
				}
				res.num = 1;
				that.cart = that.cart.concat(res);
				var nums = {};
				nums[res.id] = 1;
				that.$root.pub.$emit("nums", nums);
				//购物车总价及数量
				that.total.num++;
				that.total.pay = parseFloat((parseFloat(that.total.pay) + parseFloat(res.sprice)).toFixed(2));
				that.isCheck.push("true")
			});
			this.$root.pub.$on("subGoods", function(res) {
				for(let i = 0; i < that.cart.length; i++) {
					if(res.id == that.cart[i].id) {
						that.cart[i].num--;
						that.$set(that.cart, i, that.cart[i])
						var nums = {};
						nums[res.id] = that.cart[i].num;
						that.$root.pub.$emit("nums", nums);
						//购物车总价及数量
						that.total.num--;
						that.total.pay = parseFloat((parseFloat(that.total.pay) - parseFloat(res.sprice)).toFixed(2));
						if(that.cart[i].num == 0) {
							that.cart.splice(i, 1)
							return;
						}
						return;
					}
				}
			})
		}
	}
</script>

<style>
	.shopcart {
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		background-color: #fff;
		border-top: 1px solid #d9d9d9;
	}
	
	.mincart {
		width: 100%;
		height: 49px;
		position: relative;
		border-top: 1px solid #d9d9d9;
	}
	
	.shopcart .mincart>i {
		position: absolute;
		z-index: 50;
		left: 0;
		top: 0;
		width: 80px;
		height: 48px;
		background: url(//static-o2o.360buyimg.com/daojia/new/images/minicart/cart.png) 10px 5px no-repeat;
		background-size: 50px 125px;
		transition: transform .5s ease-out 0s;
	}
	
	.editcart {
		min-height: 40px;
		color: #666;
		border-bottom: 1px solid #ebebeb;
		position: relative;
	}
	
	.editcart span {
		display: inline-block;
		height: 100%;
		line-height: 40px;
	}
	
	.editcart .allsel {
		padding-left: 40px;
		color: #333;
		font-size: 14px;
	}
	
	.allchecked {
		background: url(/static/img/ck.png) no-repeat;
		background-size: 20px 220px;
		background-position: 10px -190px;
	}
	
	.noallchecked {
		background: url(/static/img/ck.png) no-repeat;
		background-size: 20px 220px;
		background-position: 10px 10px;
	}
	
	.editcart .numsel {
		font-size: 12px;
	}
	
	.editcart .empty {
		position: absolute;
		right: 0;
		top: 0;
		font-size: 12px;
		padding: 0 12px 0 18px;
		background: url(/static/img/delete.png) no-repeat 0 center;
		background-size: 13px 12px;
	}
	
	.goodscart li {
		position: relative;
		padding: 0 0 10px 30px;
		margin-left: 10px;
		color: #333;
		border-top: 1px solid #e8e8e8;
		height: 83px;
		display: flex;
	}
	
	.goodscart li>span {
		position: absolute;
		z-index: 3;
		left: -10px;
		top: 6px;
		width: 50px;
		height: 60px;
	}
	
	.checked {
		background: url(/static/img/ck.png) no-repeat;
		background-size: 20px 220px;
		background-position: 10px -180px;
	}
	
	.nochecked {
		background: url(/static/img/ck.png) no-repeat;
		background-size: 20px 220px;
		background-position: 10px 20px;
	}
	
	.goodscart li>img {
		width: 52px;
		height: 52px;
		margin-top: 10px;
		margin-right: 10px;
	}
	
	.goodscart li .goodsinfo {
		flex: 1;
		height: 72px;
	}
	
	.goodsinfo {
		display: flex;
		flex-direction: column;
	}
	
	.goodsinfo .goodsinfon {
		min-height: 36px;
		line-height: 36px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 14px
	}
	
	.cartactivity {
		width: 21px;
		color: #fff;
		margin: 2px 3px 0 0;
		border-radius: 2px;
		padding: 1px 2px;
		line-height: 12px;
		height: 12px;
		font-size: 10px;
		background-color: #fecc32;
	}
	
	.cartprice span {
		line-height: 20px;
		color: #ff3434;
		font-size: 16px;
	}
	
	.cartprice i {
		padding-left: 5px;
		color: #999;
		font-size: 13px;
		font-style: normal;
		text-decoration: line-through;
	}
	
	.shopcart .mincart span {
		position: absolute;
		z-index: 40;
		left: 70px;
		bottom: 0;
		line-height: 48px;
		font-size: 15px;
		color: #999;
		transition: transform .4s ease-out 0s;
	}
	
	.shopcart .mincart .pay {
		font-size: 18px;
		color: #ff3434;
	}
	
	.shopcart .mincart .checkOut {
		position: absolute;
		z-index: 40;
		right: 0;
		width: 115px;
		text-align: center;
		color: #fff;
		line-height: 48px;
		background-color: #bebebe;
	}
	
	.cartbox {
		position: absolute;
		right: 0;
		bottom: 10px;
		display: flex;
		font-size: 16px;
	}
	
	.cartbox span {
		padding: 6px;
		width: 28px;
		height: 28px;
	}
	
	.cartbox .nums {
		height: 40px;
		line-height: 40px;
		margin: 0 5px;
	}
	
	.cartbox .add {
		background-position: 0 0;
		background: url(/static/img/addNumSprite.png) no-repeat;
		background-size: 400% 100%;
		background-origin: content-box;
	}
	
	.cartbox .sub {
		background: url(/static/img/addNumSprite.png) no-repeat;
		background-size: 400% 100%;
		background-origin: content-box;
		background-position: -42px 0;
	}
</style>