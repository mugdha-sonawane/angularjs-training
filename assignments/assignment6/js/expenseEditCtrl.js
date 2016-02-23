app.controller('expenseEditCtrl', function($rootScope, $scope, $http, mainService, $q) {

    $rootScope.$on('expenseBindData', function(evnt, args) {
        $scope.exedit = {};

        $scope.exedit.payer = mainService.expenses[mainService.expenseIndex]["payer"];
        $scope.exedit.payee = mainService.expenses[mainService.expenseIndex]["payee"];
        $scope.exedit.category = mainService.expenses[mainService.expenseIndex]["category"];
        $scope.exedit.Date = mainService.expenses[mainService.expenseIndex]["Date"];
        $scope.exedit.ModeofPayment = mainService.expenses[mainService.expenseIndex]["ModeofPayment"];
        $scope.exedit.Amount = mainService.expenses[mainService.expenseIndex]["Amount"];
        $scope.exedit.Notes = mainService.expenses[mainService.expenseIndex]["Notes"];
    });
    $scope.updateExpenseData = function(data) {
        mainService.update("expense", data);
        $rootScope.$emit('getTotal');
    };
   
});
