(function(){
    angular.module('employeeApp')
    .directive('formInterface', function(){
        return{
            restrict: 'E',
            templateUrl:'app/employeeform.template.html',
            controller: 'formController',
            controllerAs: 'formCtrl'
        };
    })
})();
