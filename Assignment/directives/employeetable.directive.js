(function(){
    angular.module('employeeApp')
    .directive('employeeTable', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/employeetable.template.html',
            controller: 'tableController',
            controllerAs: 'tableCtrl'
        };
    })
})();
