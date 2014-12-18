angular.module('todoApp', ['todoApp.service'])
  .controller('Todo', ['$scope','login', function($scope,login) {
    $scope.d=[];
    $scope.s=localStorage.User;
    $scope.add=function(user,pass)
    {
       login.add(user,pass,function(data){
        $scope.d=data;
        localStorage.User=data[0].user;

        
        if(localStorage.User!=""){
          window.location.href="index1.html";
        }
        else
        {
          console.log("ควยยย");
        }
       })
    }


    $scope.logout = function(){
      localStorage.clear();
       window.location.href="index.html";
    }
  }]);