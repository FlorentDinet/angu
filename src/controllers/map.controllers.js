app.controller('MapCtrl', ['$scope','$routeParams', function($scope, $routeParams){

  $scope.map =
      {
        center:
        { latitude: $routeParams.lat, longitude: $routeParams.long },
        zoom: 13
      };


    $scope.markers = [{
       coord: {
          latitude: $routeParams.lat, //Coordonnées où placer le point
          longitude: $routeParams.long
       },
       email: "netapsys@netapsys.fr", //Propriété métier, pour les afficher à l'utilisateur lorsqu'il sélectionne le point par exemple
       icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", //Icone personnalisée
       id: 412
    }];


}]);
