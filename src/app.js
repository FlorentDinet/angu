/**
 * Load my app...
 */
var app = angular.module('MyApp', ["ngAnimate",'ngRoute', 'ui.materialize', 'ngMessages', 'ui.router', 'uiGmapgoogle-maps', 'angular-loading-bar', 'ngCookies']);

/**
 * Configure service
 */
app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDZYt1LZydksFi5HC78apt6FOiQFuK-JVo',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});
