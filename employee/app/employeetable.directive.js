(function(){
    angular.module('employeeApp')
    .directive('employeeTable', function(){
        return{
            restrict: 'E',
            templateUrl:'app/employeetable.template.html',
            controller: 'tableController',
            controllerAs: 'tableCtrl'
        };
    })
})();
