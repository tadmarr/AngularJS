(function(){
    angular.module('employeeApp')
      .controller('dataController', function($scope,$http) {
          var employeeInfo = $scope.getEmployeeInfo = function(){
                  //Whenever you click this is going to be triggered
                  //You have to create a promise that some data is going to be retrieved
                  $http.get("http://localhost:8080/json/employeeInfo.json")
                  .success(function(data, status, headers, config){
                     $scope.employeeInfo = data;
                  })
                  .error(function(data, status, headers, config){
                      alert("AJAX failed!");
                  });
                    //Store the data in an object inside the controller
              }
              $scope.$watch(employeeInfo());
});

})();
/*
here are two links to database and json file
http://localhost:8080/json/employeeInfo.json
http://localhost:5984/database/424d51bf9bc04cdef6e6264c6c001d71

$http.get(url, config)
$http.post(url, data, config)
$http.put(url, data, config)
$http.delete(url, config)
$http.head(url, config)
CRUD
<div ng-controller="MyController" >
  <button ng-click="myData.doClick(item, $event)">Send AJAX Request</button>
  <br/>
  Data from server: {{myData.fromServer}}
</div>

<script>
  angular.module("myapp", [])
      .controller("MyController", function($scope, $http) {
          $scope.myData = {};
          $scope.myData.doClick = function(item, event) {
              var responsePromise = $http.get("/angularjs-examples/json-test-data.jsp");
              responsePromise.success(function(data, status, headers, config) {
                  $scope.myData.fromServer = data.title;
              });
              responsePromise.error(function(data, status, headers, config) {
                  alert("AJAX failed!");
              });
          }
      } );
</script>
$http({
    method: 'GET',
    url: 'http://localhost:8080/json/employeeInfo.json'}).success(function(data) {
        employeeInfo = data;
    });

*/
