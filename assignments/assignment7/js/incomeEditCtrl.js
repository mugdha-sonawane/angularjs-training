app.controller('incomeEditCtrl', function($rootScope, $scope, $http, mainService, $q) {

    $rootScope.$on('incomeBindData', function(evnt, args) {
        $scope.inedit = {};
       

        $scope.inedit.payer = mainService.incomes[mainService.incomeIndex]["payer"];
        $scope.inedit.payee = mainService.incomes[mainService.incomeIndex]["payee"];
        $scope.inedit.category = mainService.incomes[mainService.incomeIndex]["category"];
        $scope.inedit.Date = mainService.incomes[mainService.incomeIndex]["Date"];
        $scope.inedit.ModeofPayment = mainService.incomes[mainService.incomeIndex]["ModeofPayment"];
        $scope.inedit.Amount = mainService.incomes[mainService.incomeIndex]["Amount"];
        $scope.inedit.Notes = mainService.incomes[mainService.incomeIndex]["Notes"];
    });
    $scope.updateIncomeData = function(data) {
        mainService.update("income", data);
        $rootScope.$emit('getTotal');
    };


});
