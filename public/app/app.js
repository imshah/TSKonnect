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


//app.value('currentUser', { data : {} });

app.factory('GetUserService',['$http',function($http){

    var currentUser;

    var getAllUsers = function(){
        return $http.get('/users');
    };

    var getUser = function(userid){
        currentUser = userid;
        return $http.get('/users/' + userid);
    };

    return({
        getAllUsers: getAllUsers,
        getUser: getUser
    });


}]);


app.directive('focusElem',[function(){
    var linker = function(scope, element, attrs){

        element[0].focus();

        element.on('blur', function () {
            scope.isEditing = false;
            //console.log('lost focus');
            scope.$apply();

        });

    };

    return {
        link: linker
    }
}]);

app.directive('dblClickEdit', [function(){

    var linker = function(scope, element, attrs){
        element.on('dblclick', function(){
            scope.isEditing = true;
            scope.$apply();
        });
    };

    return {
        templateUrl: "../templates/dblClickEdit.tpl.html",
        replace: true,
        link: linker,
        scope: {
            model: "=dblClickEdit"
        }

    }
}]);

app.directive('zoomer',[function(){
    var linker = function(scope,element, attrs){
        element.hover(
            function(){
                $(this).css({
                    'transition': 'all 0.75s',
                    'transform': 'scale(1.1)'
                });
            },
            function(){
                $(this).css({
                    'transition': 'all 0.15s',
                    'transform': 'scale(1.0)'
                });
            }
        );
    };
    return {
        link: linker
    }
}]);



app.controller('mainCtrl', ['$scope', 'currentUser', 'GetUserService',
    function($scope, currentUser, GetUserService){

        GetUserService.getAllUsers()
            .success(function (data, status, header, config) {

                $scope.appuser = data;
            });

        $scope.loadProfile = function (user) {
            GetUserService.currentUser = user;
            //currentUser.data = user;
            //$state.go('profile', {username:user.username});
        }

    }]);


app.controller('profileCtrl', ['$scope', 'currentUser', 'GetUserService',
    function($scope, currentUser, GetUserService){

    $scope.setvalue=0;
    $scope.goBubbles=false;
    var user = GetUserService.currentUser; //currentUser.data;

    GetUserService.getUser(user.username)
        .success(function (data, status, header, config) {

            $scope.appuser = data[0];
            //$scope.appuser = GetUserService.getCurrentUser();
            //console.log(data);
        });




    //new code
    $scope.goBubbles = false;
    $scope.isclicked = false;
    $scope.showBubbles = function()
    {
        if($scope.isclicked == false)
        {
            $scope.goBubbles = !$scope.goBubbles
        }
        else
        {
            $scope.goBubbles = true;
        }
    };


}]);
