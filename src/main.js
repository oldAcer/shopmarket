import Vue from 'vue'
import router from '@/router'
new Vue({
	el:'#app',
	data:{
		pub:new Vue()
	},
	router,
	template:`<router-view/>`
})
