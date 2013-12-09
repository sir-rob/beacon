var beaconControllers = angular.module('beaconControllers', []);
 
beaconControllers.controller('RegistrationCtrl', ['$scope', '$http',
  function ($scope, $http) {
  	console.log("control");
    // $http.get('phones/phones.json').success(function(data) {
    //   $scope.phones = data;
    // });
 
    // $scope.orderProp = 'age';
  }]);