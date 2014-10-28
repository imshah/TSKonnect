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
        when('/user/:userid', {
            templateUrl: '/profile',
            controller: 'profileCtrl'
        })

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

app.controller('profileCtrl', ['$scope', function($scope){

    //get the data from the database
    var data = [
        {
            "username": "ishah",
            "email": "ishah@taskstream.com",
            "name": "Ishtiak Shah",
            "title": "SDET",
            "manager": "Anand Sharma",
            "phone": "987-654-3210",
            "extension": "361",
            "imageFilePath": ""
        },

        {
            "username": "cguzman",
            "email": "cguzman@taskstream.com",
            "name": "Clifton Guzman",
            "title": "LEAD QA",
            "manager": "Anand Sharma",
            "phone": "987-654-3210",
            "extension": "362",
            "imageFilePath": ""
        },

        {
            "username": "marthur",
            "email": "marthur@taskstream.com",
            "name": "Mona Arthur",
            "title": "SDE",
            "manager": "Anand Sharma",
            "phone": "987-654-3210",
            "extension": "363",
            "imageFilePath": ""
        },


        {
           "username": "jdalton",
           "email": "jdalton@taskstream.com",
           "name": "Justin Dalton",
           "title": "SDE",
           "manager": "Anand Sharma",
           "phone": "987-654-3210",
           "extension": "364",
           "imageFilePath": ""
        },

        {
           "username": "jbollum",
           "email": "jbollum@taskstream.com",
           "name": "Joshi",
           "title": "SDE",
           "manager": "Anand Sharma",
           "phone": "987-654-3210",
           "extension": "365",
           "imageFilePath": ""
        },

        {
           "username": "sanwar",
           "email": "sanwar@taskstream.com",
           "name": "Sairah Anwar",
           "title": "PO",
           "manager": "Jeff",
           "phone": "987-654-3210",
           "extension": "366",
           "imageFilePath": ""
        }
    ];

    $scope.appuser = data;

}]);
