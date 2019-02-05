Vue.component('app-comp-teg', {
	props: ['list'],
	template: '#app-comp',
	// date: function () {
	// 	return {
	// 		}
	// 	}
});

new Vue({
	el: '#app',
	// components: {
	// 	'app-comp-teg': {
	// 		props: ['list'],
	// 		template: '#app-comp'
	// 	}
	// },
	methods: {
		getList: function () {
			return [
				{'prop':'1111'},
				{'prop':'2222'},
				{'prop':'3333'},
				{'prop':'4444'},
				{'prop':'5555'}
			]
		},
		show: function () {
			this.isShow = !this.isShow;
		
		}
	},
	data: {
		isShow: true
	}
});


