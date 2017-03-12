(function(){
	
	function cmBrandNameFn(){
		return{
			template:'<a class="navbar-brand" href="#">{{hc.brandName}}</a>',
			restrict:"A,E,C",
			link:function(scope , element , attrs){
				console.log(scope);
				console.log(element);
				console.log(attrs);
			}
		}
	}
	angular.module("common")
	.directive("cmBrandName",[cmBrandNameFn]);
})();