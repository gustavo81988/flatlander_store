(function(){

	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = gems;
	});

	app.controller('PanelController',function(){
		
		this.tab = 3 ;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}

		this.isSelected = function(checktab){
			return this.tab === checktab;
		}

	});	

	var gems =[

		{
			name: 'Dodecahedron',
			price: 2, 
			description: '....',
			images:[
				{
					full: 'gem-02.gif'
				}
			],
			reviews:[
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},

				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				},

			],
			canPurchase: true,
			soldOut: false
		},

		{
			name: 'Pentagonal Gem',
			price: 5.95, 
			description: '....',
			images:[
				{
					full: 'gem-01.gif'
				}
			],
			canPurchase: true,
			soldOut: false
		}
	]

})();
