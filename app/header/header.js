(
	function () {
		angular.module("header", []);

		angular.module("header")
			.config(function () {
				console.log("i am the header module config() method..");
			})
			.run(function () {
				console.log("i am the header module run() method...");
			});

})();
