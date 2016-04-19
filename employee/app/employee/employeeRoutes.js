(function(){
angular.module('employeeApp')
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/route', {
                    templateUrl: 'add-form.html',
                    controller: 'employeeController'
                }).when('/route2',{
                    templateUrl: 'template-2',
                    controller: 'employeeController'
                }).otherwise('/ROUTE2',{
                    redirectTo: '/'
                });
}]);
})();
