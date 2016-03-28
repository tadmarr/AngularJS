(function(){
    angular.module('employeeApp')
      .controller('employeeController', employeeCtrl);
       function employeeCtrl(){
           this.sortField = "text";
           this.reverse = "true";
          this.employee = function(){
          }
        };
})();
