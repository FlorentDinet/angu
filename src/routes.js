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
