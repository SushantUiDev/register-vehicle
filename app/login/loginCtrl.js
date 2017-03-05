(function(){
	angular.module("login")
	.config(function(){
		console.log("i am the login module config() method..");
	})
	.run(function(){
		console.log("i am the login module run() method..");
	});
})();