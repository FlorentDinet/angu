
 app.controller('UsersCtrl', ['$scope','$filter','$http', function($scope, $filter,$http){


   var currentTime = new Date();

    // Bonus: charger les users by JSON
    // //edit from https://jsonblob.com/57a59a90e4b0dc55a4eae792
    // befor: https://jsonblob.com/api/jsonBlob/57a59a90e4b0dc55a4eae792
     var users;

      $http.get('https://jsonblob.com/api/jsonBlob/57a86573e4b0dc55a4eb50a7')
      .success(function(response) {
         $scope.users = users = response;
         $scope.nbUsers = $scope.users.length;
       });

    // tranches
     $scope.tranches = [
        {"data": "10-25", "checked" : false},
        {"data": "25-45", "checked" : false},
        {"data": "45-60", "checked" : false},
      ];

      $scope.date = "01/01/1950";

     $scope.tousMineur = function (){
        return _.every($scope.users,function(user) {return user.age < 18;})
     };

     $scope.moyenneAge = function() {
         var naissanceFilter = $filter('naissance');
         var rangeFilter = $filter('range');
         var notesFilter = $filter('notes');
         var resFilter = naissanceFilter($scope.users,$scope.date);
         var notesFilter = notesFilter(resFilter,$scope.notesBac);
         var rangeFilter = rangeFilter(notesFilter,$scope.tranches);

         // qui peut etre un filtre ...(merci Damien ^^)
         var ville = $scope.cities;
         if(ville !== undefined){
           var rangeFilter = _.filter(rangeFilter, function(use){
              return use.ville == ville;
           });
         }

         // MAJ nb users
         if( rangeFilter instanceof Array ) {
           $scope.nbUsers = rangeFilter.length;
           return _.reduce(rangeFilter, function(memo, num){
             return memo + num.age;
           },0) / (rangeFilter.length === 0 ? 1 : rangeFilter.length);
         }

         return rangeFilter;

       };

       $scope.removeUser = function(user){
             var index = $scope.users.indexOf(user);
             $scope.users.splice(index, 1);
       }

       $scope.add = function(form){

         console.log($scope.nom,$scope.age,$scope.dob,$scope.photo, $scope.noteauBac,$scope.sexe, $scope.ville,  $scope.biographie);
         if(form.$valid) {

           $scope.users.push({
              nom: $scope.nom,
              prenom:  $scope.prenom,
              age: parseInt($scope.age),
              photo:  $scope.photo,
              birthday:  $scope.dob,
              noteBac:  parseInt($scope.noteauBac),
              sexe:  $scope.sexe,
              ville: $scope.ville,
              biographie: $scope.biographie
           });

           $scope.nom =  $scope.sexe = $scope.ville =  $scope.biographie = $scope.prenom = $scope.age = $scope.photo = $scope.dob = $scope.noteauBac = "";

         }else{
           console.log("Formulaire invalide", form);
         }

       }


}]);
