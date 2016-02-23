app.controller('customersCtrl', function($rootScope, $scope, $http, mainService, $q) {

    init();

    function init() {
        mainService.getIncome().then(function(data) {
            $scope.incomedata = data;
            $scope.totalincome = mainService.calcualateBalance('income');
        });

        mainService.getExpense().then(function(data) {
            $scope.expensedata = data;
            $scope.totalexpense = mainService.calcualateBalance('expense');
        });

        $rootScope.$on('getTotal', function() {
            $scope.totalincome = mainService.calcualateBalance('income');
            $scope.totalexpense = mainService.calcualateBalance('expense');
        });
    }
});
