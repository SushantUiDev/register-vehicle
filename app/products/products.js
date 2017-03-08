(function(){
	angular.module("product",[]);
	
	angular.module("product")
	.config(function(){
		console.log("i am the product module config() method...");
	})
	.run(function(){
		console.log("i am the product module run() method..");
	})
})();