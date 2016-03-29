(function(){
angular.module('employeeApp')
.factory('employeeFactory', function($http) {
        //declare empty object
        var employeeFactory = {};
        //define function
        function getEmployeeInfo (){
          $http.get("http://localhost:8080/json/employeeInfo.json")

                .success(function(data, status, headers, config){
                    console.log('huh?')
                    var employeeInfo = data;
                    console.log(employeeInfo);
                })
                .error(function(data, status, headers, config){
                    alert("AJAX failed!");
                })
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
