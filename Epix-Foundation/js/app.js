$(document).foundation();

angular.module('epixHD', ['ngAnimate', 'ngRoute', 'ngStatus'])

.controller("UserCtrl", ["getStatus", function($scope){
  console.log("LOGGED IN:", $scope.loggedin);
  if($scope.loggedin){
    $scope.state = '<div id="login-links"><a href="{{loggedin}}">Log In</a><a href="">Sign Up</a><a href="" class="highlight">Get a Free Trial</a></div>';
  }else{
    $scope.state = '<div id="login-links"><a href="{{hasprofile}}">Log In</a><a href="">Sign Up</a><a href="" class="highlight">Get a Free Trial</a></div>';
  }
  console.log($scope.state);
}])
.directive('userState', function() {
    return {
      scope: {
        customerInfo: '=state'
      },
      template: '{{stateLinks.state}}'
    };
  })
.controller('HeaderCtrl', ['$scope', function($scope) {
		$scope.headerNav = [
      {ref:0, link:'Watch Movies', url:''},
      {ref:1, link:'Specials', url:''},
      {ref:2, link:'On TV', url:''},
      {ref:3, link:'Epix Apps', url:''},
      {ref:4, link:'Get EPIX', url:''},
      {ref:5, link:'Me', url:''}
    ];
    
    $scope.ref = -1;

    $scope.dropList = [
      {menu:0, link:'All Movies', url:''},
      {menu:0, link:'Most Popular', url:''},
      {menu:0, link:'Collections', url:''},
      {menu:0, link:'Staff Picks', url:''},
      {menu:0, link:'Movie Extras', url:''},
      {menu:1, link:"Hunger Games Interactive", url:''},
      {menu:1, link:"Envelope Screening Series", url:''},
      {menu:1, link:"Comedy", url:''},
      {menu:1, link:"Concerts", url:''},
      {menu:1, link:"Docs", url:''},
      {menu:1, link:"Originals", url:''},
      {menu:4, link:"Devices", url:''},
      {menu:4, link:"Get a Free Trial", url:''},
      {menu:4, link:"Get EPIX Channel", url:''},
      {menu:4, link:"What is Epix / FAQ", url:''}
    ];

    $scope.headerMenu = function(ref){
      $scope.ref = ref;
    } 
   
}]);