/**
 * Configure your routes
 */
 app.config(['$routeProvider',
     function($routeProvider) {

         // Système de routage
         $routeProvider
         .when('/', {
             templateUrl: 'partials/users.html',
             controller: 'UsersCtrl',
             resolve: {
              properties: function() {
                return { name: 'Banner', slug: 'banner' };
              }
            }
         })
         .when('/users', {
             templateUrl: 'partials/users.html',
             controller: 'UsersCtrl'
         })
         .when('/maps', {
             templateUrl: 'partials/maps.html',
             controller: 'MapCtrl'
         })
         .when('/map/:long/:lat', {
             templateUrl: 'partials/map.html',
             controller: 'MapCtrl'
         })
         .when('/user/:prenom/:nom', {
             templateUrl: 'partials/user.html',
             controller: 'UserCtrl'
         })
         .when('/contact', {
             templateUrl: 'partials/contact.html',
             controller: 'ContactCtrl'
         })
         .otherwise({ //sinon..redirection if 404
             redirectTo: '/'
         });
     }
 ]);


// app.config(['$stateProvider','$urlRouterProvider',
//     function($stateProvider, $urlRouterProvider) {


      // $stateProvider.state('home', { //name of route
      //     url: "/",
      //     templateUrl: "/partials/users.html",
      //     controller: 'UsersCtrl',
      //     // resolve: {
      //     //   users: function(userFactory){
      //     //     return userFactory.getAll();
      //     //   }
      //     //  }
      //   })
      //
      //
      //   .state('users', {
      //     url: "/users",
      //     templateUrl: "partials/users.html",
      //     controller: 'UsersCtrl'
      //   })
      //   .state('maps', {
      //     url: "/maps",
      //     templateUrl: "partials/maps.html",
      //     controller: 'MapsCtrl'
      //   })
      //   .state('map', {
      //     url: "/map/:long/:lat",
      //     templateUrl: "partials/map.html",
      //     controller: 'MapCtrl'
      //   })
      //   .state('user', {
      //       url: '/user/:prenom/:nom',
      //       templateUrl: 'partials/user.html',
      //       controller: 'UserCtrl'
      //   });



        // Système de routage classique
        // $routeProvider

    // }
// ]);
