angular.module("app")

.controller('ViewCtrl', function ($scope, $routeParams, Encuestas){
	var id = $routeParams.id;
	Encuestas.get({id:id}, function(data){
		$scope.encuesta = data.encuesta;
		$scope.namePoll = data.namePoll;
	})

	var vm = this;
	vm.menuTemplate = {
		url: 'templates/nav.html',
	}


})