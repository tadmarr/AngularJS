(function(){
    angular.module('employeeApp')
    .directive('employeeTable', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/table.template.html',
            controller: 'tableController',
            controllerAs: 'tableCtrl'
        };
    })
})();
