angular.module('employeeApp')
    .controller('addEmployeeController', ['$scope','employeeFactory', function($scope, employeeFactory){

        $scope.submitEmployeeInfo;
        $scope.message = "Add new";

    }]);
