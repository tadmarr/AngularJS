(function(){
    angular.module('employeeApp')
      .controller('employeeController', function($scope,$http) {
          var employeeInfo = this;
              $scope.Test = function(){
                  //Whenever you click this is going to be triggered
                  console.log('WORKED');

                  //You have to create a promise that some data is going to be retrieved
                    //Store the data in an object inside the controller
              }
          $http({
              method: 'GET',
              url: 'http://localhost:8080/json/employeeInfo.json'}).then(function(data) {
                  employeeInfo = data;
              });
      });
})();
/*
http://localhost:8080/json/employeeInfo.json
http://localhost:5984/database/424d51bf9bc04cdef6e6264c6c001d71
*/
