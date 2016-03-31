(function(){
    angular.module('employeeApp')
    .controller('selectController', function($scope){
        $scope.selected = {};
        $scope.selected.doClick = function(event) {
            alert("clicked: " + event.employeeinfo + ", " + event.employeeInfo);
        }

    });

})();
