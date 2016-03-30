(function(){
    angular.module('employeeApp')
    .directive('formInterface', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/employeeform.template.html',
            controller: 'formController',
            controllerAs: 'formCtrl'
        };
    })
})();
