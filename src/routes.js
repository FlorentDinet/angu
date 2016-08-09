/**
 * Configure your routes
 */
app.config(['$routeProvider',
    function($routeProvider) {

        // Système de routage
        $routeProvider
        .when('/', {
            templateUrl: 'partials/users.html',
            controller: 'UsersCtrl'
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
