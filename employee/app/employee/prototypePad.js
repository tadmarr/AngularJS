function validator(employee){
    var item = employee;
    // if (item.firstname.length >= 3 && item.length <= 15 && isNaN(item) == true ){
    //     console.log("firstname good");
    // }
    // if (isNaN(item) == false && item >= 14 && item <= 100){
    //
    // }
    // if (item > 0 && item.length > 10){
    //
    // }
    // if (isNaN(item) == false){
    //
    // }
console.log("inside validator " + employee + item);

};











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

// Example of views in CouchDb
// {
//    "_id": "_design/other",
//    "_rev": "12-94030b7274895ea0b89118a26d81c6c8",
//    "language": "javascript",
//    "views": {
//        "other": {
//                "map": "function(doc) {\n  emit(null, doc);\n}"
//            }
//
//             lastname:   function(doc) {
//                if (employee.lastname && employee.number) {
//                    emit(employee.lastName, {FirstName: employee.firstName, designation: employee.designation});
//                }
//
//        }
//     }
// }
