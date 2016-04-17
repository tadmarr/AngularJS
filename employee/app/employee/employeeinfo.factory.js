(function(){
angular.module('employeeApp')
.factory('employeeFactory', function($http) {
        //define dependencies
        var employeeFactory = {}
            ,BASE_URL = "http://localhost:5984/other/"
            // ,couchdb = "http://localhost:5984/other/_all_docs?include_docs=true"
            ,getEmployeeInfo
            ,addEmployeeInfo
            ,putEmployeeInfo
            ,deleteEmployeeInfo;

        // Define CRUD methods
        getEmployeeInfo = function (){
            return $http.get(BASE_URL + "_design/other/_view/other")
                .success(function(response, status, headers, config){
                    console.log(response);
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
            return $http.put(BASE_URL, employee)
                .success(function(response, status, headers, config){
                })
                .error(function(error, status, headers, config){
                });
            }

            deleteEmployeeInfo = function (){
                return $http.delete(BASE_URL + "424d51bf9bc04cdef6e6264c6c00448b")
                    .success(function(response, status, headers, config){console.log("YEAH!")
                    })
                    .error(function(error, status, headers, config){
                    });
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

//        /{db}/_design/{ddoc}
//        HEAD /{db}/_design/{ddoc}	Returns bare information in the HTTP Headers for the design document
//        GET /{db}/_design/{ddoc}	Returns the design document
//        PUT /{db}/_design/{ddoc}	Creates a new design document or new version of an existing one
//        DELETE /{db}/_design/{ddoc}	Deletes the design document
//        COPY /{db}/_design/{ddoc}	Copies the design document
