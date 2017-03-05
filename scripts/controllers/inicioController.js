angular.module("app")

.controller('InicioCtrl', function ($scope,  $location, Encuestas, $route){

	Encuestas.get(function(data){
		$scope.encuestas = data.encuestas;
	})
	var vm = this;
	vm.menuTemplate = {
		url: 'templates/nav.html',
	}

	$scope.crearEncuesta = function(){
		$location.path('/create');
	}
	
})