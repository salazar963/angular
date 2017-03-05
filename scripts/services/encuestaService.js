angular.module('encuestaService',[])

.factory('Encuestas', function ($resource)
{
	return $resource("http://localhost/laravel/public/encuesta/:id", {id:"@_id"}, 
		{update: {method: "PUT", params: {id: "@id"}}
	})

})