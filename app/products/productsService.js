(function () {


	function productServiceFn($http,$q) {

		this.getProducts = function () {
			//create defer object
			var dfd = $q.defer();
			//make a http call to json file
			$http.get("api/products.json")
				.then(
					function (responce) {
						dfd.resolve(responce);
					}
				)
				.catch(
					function (errResponce) {
						dfd.reject(errResponce)
					}

				);
			return dfd.promise;
		}
	}
	angular.module("product")
		.service("productService", [ "$http","$q", productServiceFn]);
})();
