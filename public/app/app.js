var app = angular.module('myApp', ['ngResource', 'ui.router', 'ngRoute']);

app.config(function($routeProvider,$locationProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider.
        when('/', {
            templateUrl:'/partials/main',
            controller: 'mainCtrl'
        }).
        when('/user/:username', {
            templateUrl: '/profile',
            controller: 'profileCtrl'
        })

});

app.factory('currentUserService', function(){
    return {message:"Data from service"}
});


app.controller('mainCtrl', ['$scope','$http', '$window', 'currentUserService', function($scope, $http, $window, currentUserService){

    $http.get('/getUser').
        success(function (data, status, header, config) {
            $scope.appuser = data;
            //console.log(data);
        });

    $scope.loadProfile = function (user) {
        //console.log(user.username);
        $scope.currentUser = currentUserService;
        $window.location = "/user/" + user.username;

    }
}]);

app.controller('profileCtrl', ['$scope', '$http', 'currentUserService', function($scope, $http, currentUserService){

    $scope.user = currentUserService;
    console.log(user);
    /*$http.get("/getUser/" + user.username).
        success(function (data, status, header, config) {
            $scope.appuser = data;

            //console.log(data);
    });*/

}]);
