(function(){
    angular.module('employeeApp')
    .directive('employeeInterface', function(employeeFactory){
        return{
            restrict: 'E',
            templateUrl:'app/employee/employeeInterface.template.html',
            controller: 'employeeController',
            controllerAs: 'employeeCtrl'
        };
    })
})();
