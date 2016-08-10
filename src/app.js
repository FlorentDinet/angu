/**
 * Load my app...
 */
var app = angular.module('MyApp', ["ngAnimate", 'ui.materialize', 'ngMessages', 'ngRoute', 'uiGmapgoogle-maps', 'angular-loading-bar', 'ngCookies', 'ui.router']);

/**
 * Configure service
 */
app.config(function(uiGmapGoogleMapApiProvider, $cookiesProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDZYt1LZydksFi5HC78apt6FOiQFuK-JVo',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });


});
