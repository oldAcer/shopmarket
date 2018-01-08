import Vue from "vue";
import Router from 'vue-router';
import home from '@/components/home';
import shopinfo from '@/components/shopinfo';
import mycart from '@/components/mycart';
import cate from '@/components/cate';
import personal from '@/components/personal';
import login from '@/components/login';
import order from '@/components/order';
import ordermore from '@/components/ordermore';
Vue.use(Router);
export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/shopinfo/:shopid/:shopname',
			component: shopinfo,
		},
		{
			path: '/mycart',
			component: mycart,
		},
		{
			path: '/cate',
			component: cate,
		},
		{
			path: '/personal',
			component: personal,
		},
		{
			path: '/login',
			component: login,
		},
		{
			path: '/order',
			component: order,
		},
		{
			path: '/order/:shopname',
			component: ordermore,
		},
	]
})