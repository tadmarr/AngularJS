(function(){
    angular.module('employeeApp')
    .directive('formInterface', function(employeeFactory){
        return{
            restrict: 'E',
            templateUrl:'app/employee/employeedatabaseinterface.template.html',
            controller: 'employeeController',
            controllerAs: 'employeeCtrl'
        };
    })
})();
