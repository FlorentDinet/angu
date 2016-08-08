 app.controller('UserCtrl', ['$scope','$routeParams','$http', function($scope, $routeParams,$http){

   $scope.prenom = $routeParams.prenom;
   $scope.nom = $routeParams.nom;

   var user;
   $http.get('https://jsonblob.com/api/jsonBlob/57a86573e4b0dc55a4eb50a7')
   .success(function(response) {
       users = response;
       var user = $scope.user =  _.find(users, function(user) {
         return user.nom == $scope.nom && user.prenom == $routeParams.prenom;
       });

    });



}]);
