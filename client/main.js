var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'usersController',
    })
    .when('/dash', {
        templateUrl: 'partials/dash.html',
        controller: 'nerdsController', //probably gonig to change
    })
    .when('/add', {
        templateUrl: 'partials/addform.html',
        controller: 'nerdsController',
    })
    .otherwise({
        redirectTo: '/login'
    })
})
