(function(){
    angular.module('employeeApp')
    .controller('formController', ['$scope', function($scope) {

      $scope.employee = {};
      $scope.formInvalidMessage = false;

      $scope.addEmployeeInfo = function(employee) {
        if(!employeeForm.$valid){
            $scope.formInvalidMessage = true;
            return;
        }

       };
    //    Form Validation
    //    $scope.validateFirstName = function(firstname) {
    //        if (firstname.length < 3 || firstname.length > 15){
    //            $scope.firstNameIsInvalid = true;
    //            $scope.firstNameValidationMessage = 'Please enter a valid name';
    //        }
    //        else{
    //            $scope.firstNameIsInvalid = false;
    //            $scope.firstNameValidationMessage = '';
    //        }
    //          console.log(firstname);
    //
    //
    //     };

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
