var app = angular.module('myApp', ['ngResource', 'ui.router']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    //$stateProvider.state()
    /*$routeProvider.
        when('/', {
            templateUrl:'/partials/main',
            controller: 'mainCtrl'
        }).
        when('/user/:username', {
            templateUrl: '/profile',
            controller: 'profileCtrl'
        })*/

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: '/partials/main'
        })
        .state('profile', {
            url: '/user/:username',
            templateUrl: '/profile'

        });

    $urlRouterProvider.otherwise('/');

});

app.value('currentUser', { data : {} });


app.controller('mainCtrl', ['$scope','$http', 'currentUser',
    function($scope, $http, currentUser){

   //have to move this to service
    $http.get('/getUser').
        success(function (data, status, header, config) {

            $scope.appuser = data;
        });

    $scope.loadProfile = function (user) {

        currentUser.data = user;
        //$state.go('profile', {username:user.username});

    }
}]);

app.controller('profileCtrl', ['$scope', '$http', 'currentUser',
    function($scope, $http, currentUser){

    var user = currentUser.data;

    console.log(user.username);

    $http.get("/getUser/" + user.username).
        success(function (data, status, header, config) {
            $scope.appuser = data;

            //console.log(data);
    });

}]);
