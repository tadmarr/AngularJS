function validator(employee){
    var last = first = middle = age = designation = salary = validated = new Boolean(false);
    // lastname validation *need to exclude symbols
    if (employee.lastname.length >= 3 && employee.lastname.length <= 15 && isNaN(employee.lastname) == true ){
        last = true;
    }
    // firstname validation *need to exclude symbols
    if (employee.firstname.length >= 3 && employee.firstname.length <= 15 && isNaN(employee.firstname) == true ){
        first = true;
    }
    if (employee.middlename.length > 0 && isNaN(employee.middlename) == true){
        middle = true;
        console.log("middlename works" + employee.middlename);
    }
    // age validation
    if (isNaN(employee.age) == false) {
        if(employee.age >= 14 && employee.age <= 100){
            age = true;
        }
    }
    // salary validation
    if (isNaN(employee.salary) == false) {
        if(employee.salary >= 0 && employee.salary < 10000000000){
            salary = true;
        }
    }
    if (last == true && first == true && middle == true && age == true  && salary == true) {
         validated = true;
     }
console.log("inside validator " + last + first + middle+ age+ salary+ validated);
    return validated;
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
