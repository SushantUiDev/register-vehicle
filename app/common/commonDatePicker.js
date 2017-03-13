(function () {

	function cmDatePickerFn() {
		return {
			restrict: "A,E,C",
			link: function (scope, element, attrs) {
				var options={};
				if(attrs["mindate"]){
					options.minDate=attrs["mindate"];
				}
				if(attrs["maxdate"]){
					options.maxDate=attrs["maxDate"];
				}
				element.datepicker(options);
			}
		}
	}
	angular.module("common")
		.directive("cmDatePicker", [cmDatePickerFn]);
})();




