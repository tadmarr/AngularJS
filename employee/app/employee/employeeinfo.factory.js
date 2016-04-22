(function(){
angular.module('employeeApp')
    .factory('employeeFactory', function($http) {
            // Define dependencies
            var employeeFactory = {}
                ,BASE_URL = "http://localhost:5984/employee_database/"
                ,getEmployeeInfo
                ,addEmployeeInfo
                ,putEmployeeInfo
                ,deleteEmployeeInfo;

            // Define CRUD methods
            getEmployeeInfo = function (){
                return $http.get(BASE_URL + "_design/other/_view/other")
                    .success(function(response, status, headers, config){
                    })
                    .error(function(error, status, headers, config){
                    });
                }

            //inject CRUD methods
            addEmployeeInfo = function (employee){
                return $http.post(BASE_URL, employee)
                    .success(function(response, status, headers, config){
                    })
                    .error(function(error, status, headers, config){
                    });
                }

            editEmployeeInfo = function (employee){
                return $http.put(BASE_URL + employee._id, employee)
                    .success(function(response, status, headers, config){
                    })
                    .error(function(error, status, headers, config){
                    });
                }

            deleteEmployeeInfo = function (employee){

                var confirmDelete = confirm("Are you sure you want to delete?");
                if(confirmDelete){

                    return $http.delete(BASE_URL + employee._id + "?rev=" + employee._rev)
                        .success(function(response, status, headers, config){
                            // alert("Information deleted");
                        })
                        .error(function(error, status, headers, config){
                            alert("Action cancelled");
                        });
                    }
                    else{ alert("Nothing done!"); }
                }

            // Assign defined methods to employeeFactory object
            employeeFactory.getEmployeeInfo = getEmployeeInfo;
            employeeFactory.addEmployeeInfo = addEmployeeInfo;
            employeeFactory.editEmployeeInfo = editEmployeeInfo;
            employeeFactory.deleteEmployeeInfo = deleteEmployeeInfo;


            //return injected object
            return employeeFactory;

    });

})();
