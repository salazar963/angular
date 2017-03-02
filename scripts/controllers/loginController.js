angular.module("app")

.controller('LoginCtrl', ['authUser', function (authUser){


	/*$scope.loginForm = {
		email:'luisalazar@unicauca.edu.co',
		password:'12345'
	};*/

	var vm = this;

	vm.loginForm={
		email:'luisalazar@unicauca.edu.co',
		password:'12345'
	}

	/*var vm = this;
	vm.loginForm={
		email:'luisalazar@unicauca.edu.co',
		password:'12345'
	}*/

	vm.login = function(){
		authUser.loginApi(vm.loginForm);
	}
	/*$scope.login = function(){

	}*/
}])