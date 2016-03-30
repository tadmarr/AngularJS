(function(){
    angular.module('employeeApp')
    .directive('employeeTable', function(){
        return{
            restrict: 'E',
            templateUrl:'app/employee/employeetable.template.html',
            controller: 'tableController',
            controllerAs: 'tableCtrl'
        };
    })
})();
