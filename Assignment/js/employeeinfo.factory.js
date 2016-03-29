(function(){
angular.module('employeeApp')
.factory('dataController' function($scope,$http) {
     $scope.getEmployeeInfo = function(){
            $http.get("http://localhost:8080/json/employeeInfo.json")
            .success(function(data, status, headers, config){
               $scope.employeeInfo = data;
            })
            .error(function(data, status, headers, config){
                alert("AJAX failed!");
            });

        }
        employeeInfo();
});

})();
