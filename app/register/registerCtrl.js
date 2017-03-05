(function(){
	
	function registerCtrlFn(){
		var vm=this;
		vm.user={
		
		}
		
		vm.register=function(){
			console.log(vm.user);
			return vm.user;
		}
		
	}
	
	angular.module("register")
	.controller("registerCtrl",[registerCtrlFn]);
})();