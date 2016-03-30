(function(){
angular.module('employeeApp')
.factory('employeeFactory', function($http, $q) {
        //declare empty object
        var employeeFactory = {};
        //define function
        function getEmployeeInfo (){
            var deferred = $q.defer();
          $http.get("http://localhost:8080/json/employeeInfo.json")

                .success(function(data, status, headers, config){
                    var employeeInfo = data;
                    deferred.resolve(employeeInfo);
                    console.log(employeeInfo);
                })
                .error(function(error, status, headers, config){
                    alert("AJAX failed!");
                    deferred.reject(error);
                });
                return deferred.promise;
        }
        employeeFactory.getEmployeeInfo = getEmployeeInfo;
        return employeeFactory;

});

})();
/*
return logFn.apply(console, args);
var employeeInfo = function(){
        $http.get("http://localhost:8080/json/employeeInfo.json")
        .success(function(data, status, headers, config){

        })
        .error(function(data, status, headers, config){
            alert("AJAX failed!");
        });

    }
*/
