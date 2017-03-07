(function(){
	angular.module("common",[]);
	
	angular.module("common")
	.config(function(){
		console.log("i am common module config() method..");
	})
	.run(function(){
		console.log("i am common module run() method...");
	})
})();