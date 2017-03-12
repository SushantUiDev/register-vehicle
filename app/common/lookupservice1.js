(function () {

	function commonServiceFn($q, $http) {
		var countries = [{}]
		this.getCountries = function () {
			//create defer object
			var dfd = $q.defer();
			//request countries from json
			$http.get("api/countries.json")
				.then(
					function (response) {
						console.log(response);
						dfd.resolve(response.data.countries);
					})
				.catch(
					function (errResponce) {
						console.log(errResponce);
						dfd.reject("Error occure");
					})
			return dfd.promise;
		};
	}
	angular.module("common")
		.service("commonService", ["$q", "$http", commonServiceFn]);
})();
