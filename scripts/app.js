angular.module("app", [
	'ngRoute', 
	'ngResource', 
	'satellizer', 
	'authService', 
	'libroService',
	'toastr'
	])

.config(function($routeProvider, $authProvider) {
	$authProvider.loginUrl = 'http://localhost/laravel/public/authLogin';
	$routeProvider.when('/home', {
		templateUrl: 'templates/inicio.html',
		controller: 'HomeCtrl',
		controllerAs: 'inicio',
	})
	.when('/edit/:id', {
		templateUrl: 'templates/edit.html',
		controller: 'EditCtrl',
	})
	.when('/create', {
		templateUrl: 'templates/create.html',
		controller: 'CreateCtrl',
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl',
		controllerAs: 'login',
	})
	.when('/listar', {
		templateUrl: 'templates/list.html',
		controller: 'ListCtrl',
		controllerAs: 'listar',
	})
	.otherwise({redirectTo: '/home'});
})

.run(function($rootScope, $location, authUser, toastr){
	var rutasPrivadas = ['/', '/listar'];

	$rootScope.$on('$routeChangeStart', function(){
		if(($.inArray($location.path(), rutasPrivadas) !== -1) 
			&& !authUser.isLoggedIn()){
			toastr.error('Debe iniciar sesión para poder continuar', 'Mensaje');
			$location.path('/login');

		}
	});

})



// Controladores Antiguos
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





