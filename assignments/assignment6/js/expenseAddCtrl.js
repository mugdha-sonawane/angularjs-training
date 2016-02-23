app.controller('expenseAddCtrl', function($rootScope, $scope, $http, mainService, $q) {

    $scope.addExpenseData = function(data) {
        mainService.save("expense", data);
        $rootScope.$emit('getTotal');
        $scope.myForm.$setPristine();
        $scope.userexpensedata = {};
    };
});
