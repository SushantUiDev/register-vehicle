(function(){
	
	function loginCtrlFn($scope){
		$scope.user={
			
		}
		$scope.submit=function(){
			console.log($scope.user);
			return $scope.user;
		}
	}
	angular.module("login")
	.controller("loginCtrl",["$scope",loginCtrlFn])
	
})();