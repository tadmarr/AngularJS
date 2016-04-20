(function(){
angular.module('employeeApp')
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/add_employee', {
                        templateUrl: 'app/employee/addEmployeeTemplate.html',
                    })
                    .when('/edit_employee', {
                        templateUrl: 'app/employee/editEmployeeTemplate.html',
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
}]);
})();
