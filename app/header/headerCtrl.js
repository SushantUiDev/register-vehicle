(function () {

	function headerCtrlFn() {
		var vm = this;
		vm.brandName = "GoodServices";
		vm.navItems = ["login", "register", "product", "cart", "logout"];
		vm.loginTemplate = "app/login/login.tpl.html";
		vm.registerTemplate = "app/register/register.tpl.html";
		vm.productTemplate = "app/products/products.tpl.html";
		vm.offer = function () {
			alert("your offer");
		};
		
		vm.loadViwe = function (param) {
			if (param == "login") {
				vm.loadTemplate = vm.loginTemplate;
			} 
			else if (param == "register") {
				vm.loadTemplate = vm.registerTemplate;
			}
			else if (param == "product") {
				vm.loadTemplate = vm.productTemplate;
			}

		};

	}
	//create controller
	angular.module("header")
		.controller("headerCtrl", [headerCtrlFn]);
})();