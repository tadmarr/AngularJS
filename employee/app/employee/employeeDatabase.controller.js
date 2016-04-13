(function(){
    angular.module('employeeApp')
    .controller('employeeController', ['$scope','employeeFactory', function($scope, employeeFactory) {

        employeeFactory.getEmployeeInfo().then(function(response){
            $scope.employees = response.data.rows;


        // Selected employee true/false toggle
        //    $scope.selectedEmployee = {};
        //    $scope.selectEmployee = function(employee){
        //        $scope.selectedEmployee = employee;
        //        employee.isSelected=!employee.isSelected;
        //         console.log(employee.isSelected);
        //    }

        });

      $scope.employee = {};
      $scope.formInvalidMessage = false;

      function validate(employee){

      };

      $scope.addEmployeeInfo = function(employee) {
        // if(!employeeForm.$valid){
        //     $scope.formInvalidMessage = true;
        //     console.log('formInvalidMessage');
        //     return;
        // }
        validate(employee);
        console.log(employee);
        employeeFactory.addEmployeeInfo(employee).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        })
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

     }]);

})();
