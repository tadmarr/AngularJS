(function(){
    angular.module('employeeApp')
      .controller('tableController', function($scope, employeeFactory) {
          employeeFactory.getEmployeeInfo().then(function(response){
              $scope.employeeInfo = response.data;

             $scope.selectedEmployee = {};
             $scope.selectEmployee = function(employee){
                 $scope.selectedEmployee = employee;
                  console.log(employee);
             }

          });
});
})();
