(function(){
angular.module('savvyApp')
.directive('copyRight', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/copy-right.html',
    controller: 'SavvyController',
    controllerAs: 'savvyCtrl'
  }
});
})();