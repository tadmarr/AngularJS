(function(){
    angular.module('employeeApp')
    .directive('formInterface', function(employeeFactory){
        return{
            restrict: 'E',
            templateUrl:'app/employee/employeeform.template.html',
            controller: 'formController',
            controllerAs: 'formCtrl'
        };
    })
})();
