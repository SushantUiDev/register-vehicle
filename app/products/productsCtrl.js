(function(){
	
	function productCtrlFn(productSvc){
		var vm=this;
		productSvc.getProducts()
		.then(
		     function(res){
				 console.log(res);
				 vm.products=res.data.products;
			 }
		)
		.catch(
		     function(errResponce){
				 console.log(errResponce)
			 }
		);
		vm.minimumCharactar=5;
	}
	angular.module("product")
	.controller("productCtrl",["productService",productCtrlFn]);
})();