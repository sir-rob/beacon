angular.module('docsIsolateScopeDirective', [])
  .controller('Ctrl', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    console.log($scope);
  })
  .directive('myFavCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        favCustomerInfo: '=info'
      },
      template: 'Name: {{favCustomerInfo.name}} Address: {{favCustomerInfo.address}}'
    };
  });