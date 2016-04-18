(function(){
    angular.module('employeeApp')
    .controller('employeeController', ['$scope','employeeFactory', function($scope, employeeFactory) {

        // Define variable dependencies
        $scope.employee = {};
        $scope.formInvalidMessage = false;
        $scope.selectEmployee = selectEmployee;
        $scope.addEmployeeInfo = addEmployeeInfo;
        $scope.editEmployeeInfo = editEmployeeInfo;
        $scope.deleteEmployeeInfo = deleteEmployeeInfo;


        function selectEmployee(employee){
            $scope.employee = employee.value;
            console.log(employee);
        }

        // Trigger the constructore function
        activate();

        // Our constructor function
        function activate(){

            // As the page builds, get our list of employees
            getEmployeeInfo();
        }

        // @getEmployeeInfo : Gets a list of employees from CouchDb using our EmployeeFactory
        function getEmployeeInfo(){

            // Calling the factory method for it get the list of employees
            employeeFactory.getEmployeeInfo().then(function(response){

                // Assiging the list of employees to the scope variable that binds to our table
                $scope.employees = response.data.rows;

              // Selected employee true/false toggle
                //  $scope.selectedEmployee = {};
                //  $scope.selectEmployee = function(employee){
                //      $scope.selectedEmployee = employee;
                //      employee.isSelected=!employee.isSelected;
                //       console.log(employee.isSelected);
                //  }

          });
        }

        // @validate: This function validates the schema of an employee object
        function validate(employee){

            var isValid = false;

            if(!employeeForm.$valid){
                $scope.formInvalidMessage = true;
                isValid = false;
            }else{
                $scope.formInvalidMessage = false;
                isValid = true;
            }

            if(employee.firstname.length < 3){
                isValid= false;
            }

            return isValid;
        };

        // @addEmployeeInfo: This function will request our factory to POST an employee object to CouchDB
        function addEmployeeInfo(employee) {

            // Call our local validate function to check the schema of an employee
            var isValid = validate(employee);

            if(isValid){
                console.log('Im valid')
            }
            // @addEmployeeInfo: Request the factory to add an employee object
            employeeFactory.addEmployeeInfo(employee).then(function(response){

                // A successful event!
                console.log(response);
                getEmployeeInfo();


            }).catch(function(error){

                // Oops something went wrong.

                // Print the error
                console.log(error);

            })
       };
       // @deleteEmployeeInfo: This function will request our factory to POST an employee object to CouchDB
       function deleteEmployeeInfo(employee) {

           // Call our local validate function to check the schema of an employee
          //  var isValid = validate(employee);
           //
          //  if(isValid){
          //      console.log('delete valid')
          //  }
           // Request the factory to add an employee object
           employeeFactory.deleteEmployeeInfo(employee).then(function(response){

               // A successful event!
               console.log(response);
               getEmployeeInfo();


           }).catch(function(error){

               // Oops something went wrong.

               // Print the error
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
