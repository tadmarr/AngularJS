angular.module('employeeApp')
    .controller('editEmployeeController', ['$scope','employeeFactory', function($scope, employeeFactory){

        $scope.submitEmployeeInfo;
        $scope.message = "Edit";

        // @editEmployeeInfo: This function will request our factory to POST an employee object to CouchDB
        function editEmployeeInfo(employee) {

            // Call our local validate function to check the schema of an employee
            // var isValid = validate(employee);
            //
            // if(isValid){
            //     console.log('Im valid')
            // }
            // @addEmployeeInfo: Request the factory to add an employee object
            employeeFactory.editEmployeeInfo(employee).then(function(response){

                // A successful event!
                console.log(response);
                getEmployeeInfo();


            }).catch(function(error){

                // Print the error
                console.log(error);

            })
        };

    }]);
