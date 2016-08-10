/**
 * Configure your routes
 */

 app.factory('test', function ($http) {

   return {
     nom: 'Boyer',
     prenom: 'Julien',
     test: function(){
       return $http.get('https://jsonblob.com/api/jsonBlob/57a8d915e4b0dc55a4eb7378')
       .success(function(response) {
          return response;
        });
     }
   };

 });


 app.config(function($stateProvider, $urlRouterProvider) {
   //
   // For any unmatched url, redirect to /state1
   $urlRouterProvider.otherwise("/");
   //
   // Now set up the states
   $stateProvider
     .state('home', {
       url: "/",
       templateUrl: 'partials/users.html',
       controller: 'UsersCtrl',
       resolve: {
          message: function(test){
            return test.test();
          }
       },
     });

 });

// app.config(['$routeProvider',
//     function($routeProvider) {
//
//         // Système de routage
//         $routeProvider
//         .when('/', {
//             templateUrl: 'partials/users.html',
//             controller: 'UsersCtrl',
//
//         })
//         .when('/users', {
//             templateUrl: 'partials/users.html',
//             controller: 'UsersCtrl'
//         })
//         .when('/maps', {
//             templateUrl: 'partials/maps.html',
//             controller: 'MapCtrl'
//         })
//         .when('/map/:long/:lat', {
//             templateUrl: 'partials/map.html',
//             controller: 'MapCtrl'
//         })
//         .when('/user/:prenom/:nom', {
//             templateUrl: 'partials/user.html',
//             controller: 'UserCtrl'
//         })
//         .when('/contact', {
//             templateUrl: 'partials/contact.html',
//             controller: 'ContactCtrl'
//         })
//         .otherwise({ //sinon..redirection if 404
//             redirectTo: '/'
//         });
//     }
// ]);
