angular.module('authService',[])

.factory('authUser', ['$auth', function ($auth) {
	var login = function(loginForm){
		$auth.login(loginForm).then(
			function (responde){
				console.log(responde);
			},
			function(error){
				console.log(error);
			}
			);
	};
	return {
		loginApi: function(loginForm){
			login(loginForm);
		}
	};
}])