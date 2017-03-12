(function(){
	
	function registerCtrlFn(commonSvc){
	     var vm=this;
		 var selectedCountry="";
		vm.user={
			
		}
		vm.register = function () {
            console.log(vm.user);
        }
		vm.DobRange={
			
		}
		vm.mobileNo={
			
		}
		commonSvc.getCountries()
		.then(function(res){
			console.log(res)
			vm.countries=res;
		})
		.catch(function(err){
			console.log(err)
		})
		vm.selectedCountry=function(country){
		  alert("hi");
		}
		
		
	}
	angular.module("register")
	.controller("registerCtrl",["commonService",registerCtrlFn]);
})();


/*(function(){
	
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
})();*/