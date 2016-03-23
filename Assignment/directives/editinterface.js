(function(){
    angular.module('employeeApp')
    .directive('editInterface', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/edit-interface.html'
        }
    })
})();
