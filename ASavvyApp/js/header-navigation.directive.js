(function(){
angular.module('savvyApp')
.directive('headerNavigation', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/header-navigation.html',
    controller: 'SavvyController',
    controllerAs: 'savvyCtrl'
  }
});
})();
