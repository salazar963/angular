angular.module("app")

.controller('CrearCtrl', ['$scope','$http', '$location', 'toastr', function ($scope,$http, $location, toastr) 
{
	var vm = this;
	vm.menuTemplate = {
		url: 'templates/nav.html',
	}

	
	$scope.uploadFile = function()
	{
		//var deferred = $q.defer();
		var name = $scope.name;
		var file = $scope.file;
		
		var formData = new FormData();
		formData.append("namePoll", name);
		formData.append("file", file);
		//console.log(formData);

		$http.post("http://localhost/laravel/public/encuesta", formData, {
			headers: {
				"Content-type": undefined
			},
			transformRequest: angular.identity
		})
		.then(function successCallback(response) {
			$location.path('/');
			toastr.success('Encuesta creada exitosamente', 'Mensaje');
			
		}, function errorCallback(response) {
			$location.path('/');
			toastr.error('La encuesta no se pudo crear', 'Mensaje');
		});


	}
}])

.directive('uploaderModel', ["$parse", function ($parse) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) 
		{
			iElement.on("change", function(e)
			{
				$parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
			});
		}
	};
}])