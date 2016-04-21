angular.module('employeeApp')
    .controller('editEmployeeController',['$scope','employeeFactory', function($scope, employeeFactory){

        $scope.editEmployeeInfo = editEmployeeInfo;
        $scope.message = "Edit";

    
    }]);
