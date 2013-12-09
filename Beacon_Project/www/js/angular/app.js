var beaconApp = angular.module('beaconApp', [
  'ngRoute',
  'beaconControllers'
]);
 
beaconApp.config(['$routeProvider',
  function($routeProvider) {
    console.log("app");
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/registration.html',
        controller: 'RegistrationCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
        // templateUrl: 'registration.html',
        // controller: 'RegistrationCtrl'
      });
  }]);