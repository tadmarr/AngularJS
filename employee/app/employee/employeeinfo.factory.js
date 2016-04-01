(function(){
angular.module('employeeApp')
.factory('employeeFactory', function($http) {
        //define dependencies
        var employeeFactory = {},
            couchdbRoot = "http://localhost:5984/database/424d51bf9bc04cdef6e6264c6c001d71",
            employeeInfoJson = "http://localhost:8080/app/employee/employeeinfo.json";

        //define CRUD methods
        var getEmployeeInfo = function (){
            return $http.get(employeeInfoJson)
                .success(function(response, status, headers, config){
                })
                .error(function(error, status, headers, config){
                });
            }

        //inject CRUD methods

        employeeFactory.getEmployeeInfo = getEmployeeInfo;

        //return injected object
        return employeeFactory;
});

})();
