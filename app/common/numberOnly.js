(function () {

		function cmNumberOnlyFn() {
			return: {
				restrict: "A",
				link: function (scope, element, attrs) {
					element.bind("keypress", function (e) {
						 var lengthOfNumbers = attrs["maxnumbers"];
							if (e.keyCode >= 48 && e.keyCode <= 57 && this.value.length < lengthOfNumbers) {

							} else {
								e.preventDefault();
							}

						}
					}
				}
			}
				angular.module("common")
				.directive("cmNumberOnly", [cmNumberOnlyFn]);
			})();
