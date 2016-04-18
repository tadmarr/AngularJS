// (function(){
//     angular.module('employeeApp')
//       .controller('tableController', function($scope, employeeFactory) {
//           employeeFactory.getEmployeeInfo().then(function(response){
//               $scope.employeeInfo = response.data;
//
//             //  $scope.selectedEmployee = {};
//             //  $scope.selectEmployee = function(employee){
//             //      $scope.selectedEmployee = employee;
//             //      employee.isSelected=!employee.isSelected;
//             //       console.log(employee.isSelected);
//             //  }
//
//           });
//      });
// })();
{
   "_id": "_design/other",
   "_rev": "12-94030b7274895ea0b89118a26d81c6c8",
   "language": "javascript",
   "views": {
       "other": {
               "map": "function(doc) {\n  emit(null, doc);\n}"
           }

            lastname:   function(doc) {
               if (employee.lastname && employee.number) {
                   emit(employee.lastName, {FirstName: employee.firstName, designation: employee.designation});
               }

       }
    }
}
