(function(){
angular.module('employeeApp')
.factory('employeeFactory', function($http) {
        //define dependencies
        var employeeFactory = {}
            ,other = "http://localhost:5984/other/_design/other/_view/other"
            ,mydatabase = "http://localhost:5984/mydatabase/_temp_view"
            ,employeeInfoJson = "http://localhost:8080/app/employee/employeeinfo.json"
            ,url = other
            ,getEmployeeInfo
            ,addEmployeeInfo
            ,putEmployeeInfo
            ,deleteEmployeeInfo
            ,createEmployeeInfo;

        // Define CRUD methods
        getEmployeeInfo = function (){
            return $http.get(url)
                .success(function(response, status, headers, config){
                    console.log(response);
                })
                .error(function(error, status, headers, config){
                });
            }

        //inject CRUD methods
        addEmployeeInfo = function (employee){
            return $http.post(url, employee)
                .success(function(response, status, headers, config){console.log(employee);
                })
                .error(function(error, status, headers, config){
                });
            }


        // Assign defined methods to employeeFactory object
        employeeFactory.getEmployeeInfo = getEmployeeInfo;
        employeeFactory.addEmployeeInfo = addEmployeeInfo;

        //return injected object
        return employeeFactory;
});

})();




// putEmployeeInfo = function (){
//     return $http.post(employeeInfoJson)
//         .success(function(response, status, headers, config){
//         })
//         .error(function(error, status, headers, config){
//         });
//     }
// deleteEmployeeInfo = function (){
//     return $http.post(employeeInfoJson)
//         .success(function(response, status, headers, config){
//         })
//         .error(function(error, status, headers, config){
//         });
//     }
