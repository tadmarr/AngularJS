angular.module('employeeApp')
    .controller('editEmployeeController', ['$scope','employeeFactory', function($scope, employeeFactory){

        $scope.submitEmployeeInfo;
        $scope.message = "Edit";

    }]);
