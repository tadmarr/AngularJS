(function(){
    angular.module('employeeApp')
    .directive('employeeTable', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/employee-table.html',
            controller: 'dataController',
            controllerAs: 'dataCtrl'
        };
    })
})();
/*
controller: function (){
},
controllerAs: 'employeeCtrl'
*/
