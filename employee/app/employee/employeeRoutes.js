(function(){
angular.module('employeeApp')
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/add_employee', {
                        templateUrl: 'app/employee/form.template.html',
                        controller: 'addEmployeeController'
                    })
                    .when('/edit_employee', {
                        templateUrl: 'app/employee/form.template.html',
                        controller: 'editEmployeeController'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
}]);
})();
