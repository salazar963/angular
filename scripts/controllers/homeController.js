angular.module("app")

.controller('HomeCtrl', ['$scope', '$route', function ($scope, $route){
	var vm = this;
	vm.menuTemplate = {
		url: 'templates/nav.html',
	}
}])