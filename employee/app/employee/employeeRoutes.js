(function(){
angular.module('employeeApp')
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/add_employee', {
                        templateUrl: 'app/employee/addEmployee.template.html',
                    })
                    .when('/edit_employee', {
                        templateUrl: 'app/employee/editEmployee.template.html',
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
}]);
})();
