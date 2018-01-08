<template>
	<footer>
		<ul>
			<li v-for='item,index in footlist' :class="{'focus':$route.path==item.url}">
				<a class='classify' :class="'classify'+index" :href="item.url">
					{{item.content}}
				</a>
			</li>
		</ul>
	</footer>

</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				footlist: [],
			}
		},
		mounted: function() {
			var that = this;
			$.get('https://www.easy-mock.com/mock/5a27d2a47bf3ee170dc26494/jd/footlist', function(res) {
				that.footlist = that.footlist.concat(res.data)
			}, 'json')
		}
	}
</script>
<style>
	footer ul li {
		width: 25%;
		height: 100%;
		list-style: none;
	}
	
	footer {
		width: 100%;
		position: fixed;
		bottom: 0px;
		height: 50px;
		background-color: white;
	}
	
	footer ul {
		width: 100%;
		height: 100%;
		display: flex;
		border-top: 1px solid #d9d9d9;
		z-index: 999;
		background-color: white;
	}
	
	footer .classify {
		width: 100%;
		display: block;
		height: 20px;
		padding-top: 30px;
		text-align: center;
		background: white;
		color: #555;
		font-size: 12px;
	}
	
	footer .classify0 {
		background: url(/static/img/nav.png) no-repeat center -250px;
		background-size: 24px 600px;
	}
	
	footer .classify1 {
		background: url(/static/img/nav.png) no-repeat center -300px;
		background-size: 24px 600px;
	}
	
	footer .classify2 {
		background: url(/static/img/nav.png) no-repeat center -350px;
		background-size: 24px 600px;
	}
	
	footer .classify3 {
		background: url(/static/img/nav.png) no-repeat center -400px;
		background-size: 24px 600px;
	}
	
	footer .classify4 {
		background: url(/static/img/nav.png) no-repeat center -450px;
		background-size: 24px 600px;
	}
	
	.focus .classify {
		background-position: center 0;
		color: #39ac69;
	}
	.focus .classify1 {
		background: url(/static/img/nav.png) no-repeat center -50px;
		background-size: 24px 600px;
		color: #39ac69;
	}
	
	.focus .classify2 {
		background: url(/static/img/nav.png) no-repeat center -100px;
		background-size: 24px 600px;
		color: #39ac69;
	}
	
	.focus .classify3 {
		background: url(/static/img/nav.png) no-repeat center -150px;
		background-size: 24px 600px;
		color: #39ac69;
	}
	
	.focus .classify4 {
		background: url(/static/img/nav.png) no-repeat center -200px;
		background-size: 24px 600px;
		color: #39ac69;
	}
</style>