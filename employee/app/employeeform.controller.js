(function(){
    angular.module('employeeApp')
      .controller('formController', function($scope, employeeFactory) {
          employeeFactory.getEmployeeInfo().then(function(response){
              $scope.employeeInfo = response.data;
          });
      });
})();
