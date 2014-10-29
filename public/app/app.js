var app = angular.module('myApp', [
    'ngResource',
    'ui.router',
    'ngAnimate'
]);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

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

   ///TDB: have to move this to service
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

    $scope.setvalue=0;
    $scope.goBubbles=false;
    var user = currentUser.data;
    //console.log(user.username);


        ///TBD: move this service
    $http.get("/getUser/" + user.username).
        success(function (data, status, header, config) {
            $scope.appuser = data;

            console.log(data);
    });



        //new code
    $scope.goBubbles = false;
    $scope.isclicked = false;
    $scope.showBubbles = function()
    {
        //window.alert($scope.isclicked);
        if($scope.isclicked == false)
        {
            $scope.goBubbles = !$scope.goBubbles
        }
        else
        {
            $scope.goBubbles = true;
        }
    }

    // Image click behaviour
    $scope.openNewURL = function(url){
        //$window.alert(url);
        //window.location.href = url;
    }
}]);
