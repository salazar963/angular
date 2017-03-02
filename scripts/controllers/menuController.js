angular.module("app")

.controller('MenuCtrl', function ($scope, $location, authUser){
	var vm = this;
	
	vm.logout = function(){
		authUser.logout();
	};
	vm.isActive = function(viewLocation){

		return viewLocation === $location.path();

	}
})