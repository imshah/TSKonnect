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
        $scope.users = [
        {'FirstName':'Clifton',
         'LastName':'Guzman',
          'Department':'SDET',
          'Email':'cguzman@taskstream.com'},

          {'FirstName':'Ishtiak',
         'LastName':'Shah',
          'Department':'SDET',
          'Email':'Ishah@taskstream.com'},

          {'FirstName':'Adam',
         'LastName':'Phillips',
          'Department':'DEVOPS',
          'Email':'aphillips@taskstream.com'}
        ];

    });

