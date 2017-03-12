(function(){
	
	function cmDatePickerFn(){
		return{
			restrict:"A,E,C",
			link:function(){
				
			}
		}
	}
	angular.module("common")
	.directive("cmDatePicker",[cmDatePickerFn]);
})();