(function(){
    angular.module('employeeApp')
    .controller('employeeController', ['$scope','employeeFactory', '$route', function($scope, employeeFactory, $route) {

        // Define variable dependencies
        $scope.employee = {};
        $scope.selectedEmployee = {};
        $scope.formInvalidMessage = false;
        $scope.selectEmployee = selectEmployee;


        $scope.deleteEmployeeInfo = deleteEmployeeInfo;
        $scope.validator = validator;

        $scope.clear_form = function clear_employee(){
                                    $scope.employee = {};
                                };

        // This function populates form with selected employee
        function selectEmployee(employee){
            $scope.employee = employee.value;
        };

        // Selected employee true/false toggle
//        $scope.selectEmployee = function(employee){
//            $scope.selectedEmployee = employee;
//            employee.isSelected=!employee.isSelected;
//            console.log(employee.isSelected);
//        }
        // Triggers the constructor function
        activate();

        // The constructor function
        function activate(){

            // As the page builds, get our list of employees
            getEmployeeInfo();
        }

        // @getEmployeeInfo : Gets a list of employees from CouchDb using service, EmployeeFactory
        function getEmployeeInfo(){

            // Calling the factory method for it get the list of employees
            employeeFactory.getEmployeeInfo().then(function(response){

                // Assiging the list of employees to the scope variable that binds to our table
                $scope.employees = response.data.rows;

          });
        }


        // @validate: This function validates the schema of an employee object
        function validate(employee){
        //
        //     var isValid = false;
        //
        //     if(!employeeForm.$valid){
        //         $scope.formInvalidMessage = true;
        //         isValid = false;
        //     }else{
        //         $scope.formInvalidMessage = false;
        //         isValid = true;
        //     }
        //
        //     if(employee.firstname.length < 3){
        //         isValid= false;
        //     }
        //
        //     return isValid;
        };


       // @deleteEmployeeInfo: This function will request our factory to DELETE an employee object from CouchDB
       function deleteEmployeeInfo(employee) {

           // Request the factory to delete an employee object

         employeeFactory.deleteEmployeeInfo(employee).then(function(response){
               // A successful event!
               console.log(response);
               getEmployeeInfo();

           }).catch(function(error){

               // Print the error
               console.log(error);

           })

      };


     }]);

})();

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
//     };
