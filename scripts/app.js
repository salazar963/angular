var app = angular.module("app", ["ngRoute", "ngResource"])


.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'templates/list.html',
		controller: 'HomeCtrl',
	})
	.when('/edit/:id', {
		templateUrl: 'templates/edit.html',
		controller: 'EditCtrl',
	})
	.when('/create', {
		templateUrl: 'templates/create.html',
		controller: 'CreateCtrl',
	})
	.otherwise({redirectTo: '/home'});
}])

.controller('HomeCtrl', ['$scope', 'Libros', '$route', function ($scope, Libros, $route){
	Libros.get(function(data){
		$scope.libros = data.libros;
	})
}])

.controller('EditCtrl', ['$scope', 'Libros', '$routeParams', function ($scope, Libros, $routeParams){
	$scope.settings = {
		pageTitle: "Editar libro",
		action: "Editar",
	}

	var id = $routeParams.id;
	Libros.get({id:id}, function(data){
		$scope.libro = data.libros;
	})

	$scope.submit = function(){
		Libros.update({id:$scope.libro.id_libro}, $scope.libro).$promise.then(function(data)
		{
			if(data.msg){
				$scope.settings.success = "Libro editado correctamente";
			}
		})
	}
}])

.controller('CreateCtrl', ['$scope', 'Libros', function ($scope, Libros){
	$scope.settings = {
		pageTitle: "Crear libro",
		action: "Crear",
	}

	$scope.libro = {
		nombre: "",
		descripcion: ""
	};

	$scope.submit = function(){

		Libros.save($scope.libro).$promise.then(function(data)
		{
			if(data.msg){
				angular.copy({},$scope.libro);
				$scope.settings.success = "Video guardado correctamente";
			}
		});
	}
}])

.factory('Libros', function ($resource)
{
	return $resource("http://localhost/laravel/public/libros/:id", {id:"@_id"}, 
		{update: {method: "PUT", params: {id: "@id"}}
	})

})


