angular.module("app")

.controller('ListCtrl', ['$scope', 'Libros', '$route', function ($scope, Libros, $route){
	Libros.get(function(data){
		$scope.libros = data.libros;
	})

	var vm = this;
	vm.menuTemplate = {
		url: 'templates/nav.html',
	}
}])