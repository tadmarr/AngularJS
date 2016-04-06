(function(){
angular.module('employeeApp')
.factory('employeeFactory', function($http) {
        //define dependencies
        var employeeFactory = {},
            couchdbRoot = "http://localhost:5984/database/424d51bf9bc04cdef6e6264c6c001d71",
            other = "http://localhost:5984/other/424d51bf9bc04cdef6e6264c6c00448b",
            employeeInfoJson = "http://localhost:8080/app/employee/employeeinfo.json",
            getEmployeeInfo,
            addEmployeeInfo,
            putEmployeeInfo,
            deleteEmployeeInfo;

        //define CRUD methods
        getEmployeeInfo = function (){
            return $http.get(employeeInfoJson)
                .success(function(response, status, headers, config){console.log(response);
                })
                .error(function(error, status, headers, config){
                });
            }

        //inject CRUD methods
        addEmployeeInfo = function (){
            return $http.post(employeeInfoJson)
                .success(function(response, status, headers, config){
                })
                .error(function(error, status, headers, config){
                });
            }
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
        employeeFactory.getEmployeeInfo = getEmployeeInfo;

        //return injected object
        return employeeFactory;
});

})();
// app.controller('ReviewController', function() {
//   this.review = {};
//
//   this.addReview = function(product) {
//     product.reviews.push(this.review);
//
//     this.review = {};
//   };
// });
