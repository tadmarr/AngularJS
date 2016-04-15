(function(){
    angular.module('employeeApp')
    .directive('employeeInterface', function(employeeFactory){
        return{
            restrict: 'E',
            templateUrl:'app/employee/employeeDatabaseInterface.template.html',
            controller: 'employeeController',
            controllerAs: 'employeeCtrl'
        };
    })
})();
