(function () {
	//module creation
	angular.module("goodServices", ["header","login","register"]);

	angular.module("goodServices")
		.config(function () {
			console.log("i am app.js config() method..");
		})
		.run(function () {
			console.log("i am app.js run() method..");
		});
})();