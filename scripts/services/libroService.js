angular.module('libroService',[])

.factory('Libros', function ($resource)
{
	return $resource("http://localhost/laravel/public/libros/:id", {id:"@_id"}, 
		{update: {method: "PUT", params: {id: "@id"}}
	})

})