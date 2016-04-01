(function(){
    angular.module('employeeApp')
  .controller('formController', ['$scope', function($scope) {
      $scope.master = {};

       $scope.update = function(user) {
         $scope.master = angular.copy(user);
       };

       $scope.reset = function() {
         $scope.user = angular.copy($scope.master);
       };

       $scope.reset();
     }]);

})();
//   .controller('formController', function($scope, employeeFactory) {
//       employeeFactory.getEmployeeInfo().then(function(response){
//           $scope.employeeInfo = response.data;
//
//
//       });
//   });
// angular.module('employeeApp')
