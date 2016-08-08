
 app.controller('HeaderCtrl', ['$scope','$rootScope','filterFilter', '$http', function($scope,$rootScope,filterFilter,$http){

   $scope.searching = function(){

    //  $rootScope.users = filterFilter($rootScope.users, {nom: 'Lannister'}); // by attribute
     $rootScope.search = $scope.search;
     $rootScope.tri = $scope.tri;
     // rootscope me sert a controller des données en dehors de ma scope courante
   }


}]);
