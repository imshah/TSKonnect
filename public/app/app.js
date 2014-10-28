var app = angular.module('myApp', ['ngResource', 'ui.router', 'ngRoute']);

app.config(function($routeProvider,$locationProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider.when('/', {
        templateUrl:'/partials/main',
        controller: 'mainCtrl'
    })
    /*$stateProvider
        .state('main', {
            url: '/main',
            templateUrl:'/partials/main',
            controller: 'mainCtrl'
        });*/
});
app.controller('mainCtrl', function($scope){
        $scope.myVar = "You are awesome";
    });

