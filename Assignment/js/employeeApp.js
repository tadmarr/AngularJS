(function(){

angular.module('employeeApp', [])
  .controller("employeeController", function(){
      this.employee = employeeInfo;

});

var employeeInfo = {
                     "number": 4,
                     "firstname": "Ellie",
                     "lastname": "Candle",
                     "middlename": "A",
                     "age": 27,
                     "designation": "Consultant",
                     "salary": 64000,
                   }

})();
/*
$http.get('/someUrl', config).then(successCallback, errorCallback);
$http.head
$http.post('/someUrl', data, config).then(successCallback, errorCallback);$http.put
$http.delete delete(url, [config]);

$http.jsonp
$http.patch

factory(name, $getFn);

// Simple GET request example:
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

angular.module('employeeApp',[])
.controller('employeeController', function($scope){
    $scope.Employee = {};
        $scope.Employee.employeeNumber = {"1"};
        $scope.Employee.employeeFirstName = {"Greg"};
        $scope.Employee.employeeLastName = {"Olson"};
        $scope.Employee.employeeMiddleName = {"D"};
        $scope.Employee.employeeAge = {"30"};
        $scope.Employee.employeeDesignation = {"Technology Support Specialist"};
        $scope.Employee.employeeSalary = {"65,000"};

});
*/
