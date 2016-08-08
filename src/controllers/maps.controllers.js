app.controller('MapsCtrl', ['$scope','$http',function($scope, $http){
  console.log("coucou");

  $scope.map =
      {
        center:
        { latitude: 45.750000, longitude: 4.850000 },
        zoom: 11
      };

    $scope.markers = [];

    $http.get('https://jsonblob.com/api/jsonBlob/57a86573e4b0dc55a4eb50a7')
    .success(function(response) {
      _.each(response, function(elt){
        $scope.markers.push({
          coord: {
            latitude: elt.geolocalisation.lat, //Coordonnées où placer le point
            longitude: elt.geolocalisation.long
          },
          email: "netapsys@netapsys.fr", //Propriété métier, pour les afficher à l'utilisateur lorsqu'il sélectionne le point par exemple
          icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", //Icone personnalisée
          id: 412
        });

      });

     });


    $scope.clickMarker = function(marker) {
         alert(marker.email); //Affichera l'email du point sur lequel on a cliqué
      };

}]);
