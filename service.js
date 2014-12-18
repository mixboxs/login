angular.module('todoApp.service',[])
.factory('login',['$http',
	function($http)
	{
       return{
       	add:function(user,pass,callback)
       	{
          var temp=
          {
          	user : user,
          	pass : pass

          };
          $http.get('get/',{
          	params : temp
          }).success(function(data){
          	callback(data);
          }).
          error(function(data){
          	callback({
          		error:1
          	});
          });
       	}
       }

	}])