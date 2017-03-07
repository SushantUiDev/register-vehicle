(function(){
	
	function registerCtrlFn(lookupSvc){
		var vm=this;
		vm.user={
		
		}
		vm.countries=lookupSvc.getCountries();
		console.log(vm.countries);
		vm.selectedCountry = lookupSvc.defaultCountry();
		vm.register=function(){
			console.log(vm.user);
			return vm.user;
		}
		
	}
	
	angular.module("register")
	.controller("registerCtrl",["lookupService",registerCtrlFn]);
})();