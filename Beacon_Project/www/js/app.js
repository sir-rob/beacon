angular.module('BeaconApp', ['ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {
  console.log("config", $locationProvider);
    $routeProvider.when('/login', {
      templateUrl: 'partials/login.html'
    })
    .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
})
.controller('InitCtrl', ['$scope','$location', function($scope,$location) {
    $scope.onStatus = { loggedin    : false,
                        username    : "",
                        secretPin   : "",
                        myNumber    : 1231231234,
                        status      : "login"
                      }
  console.log("InitCtrl");
  $scope.onLogin = function() {
  console.log("onLogin",$scope.onStatus);
  // var serial = $scope.userInfo; 
  // console.log("meh",serial.serialize());
  // var REGISTER_PATTERN = "/epx/ajax/user/register";
  // $http.post(REGISTER_PATTERN,$("#freetrial_form").serialize()).success(function(data) {
  //   console.log("REGISTER RESPONSE: ",data.success);
  // });

  }; 
}])

