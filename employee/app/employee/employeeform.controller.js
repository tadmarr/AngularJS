(function(){
    angular.module('employeeApp')
    .controller('formController', ['$scope', function($scope) {
      $scope.master = {};
      $scope.employee = {};
      $scope.addEmployeeInfo = function(employee) {
        if(employee.firstname){
            console.log(employee);
        }

       };
       $scope.validateFirstName = function(firstname) {
           if (firstname.length < 3){
               $scope.firstNameIsInvalid = true;
               $scope.firstNameValidationMessage = 'Use more than 3 characters';
           }
           else{
               $scope.firstNameIsInvalid = false;
               $scope.firstNameValidationMessage = '';
           }
             console.log(firstname);


        };

       $scope.reset = function() {
         $scope.employee = angular.copy($scope.master);
       };

       $scope.reset();
     }]);

})();
//   .controller('formController', function($scope, employeeFactory) {
//       employeeFactory.getEmployeeInfo().then(function(response){
//           $scope.employeeInfo = response.data;
//
//
//       });
//   });
// angular.module('employeeApp')
