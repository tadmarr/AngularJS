(function(){
    angular.module('employeeApp')
    .directive('formInterface', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/form.template.html',
            controller: 'formController',
            controllerAs: 'formCtrl'
        };
    })
})();
