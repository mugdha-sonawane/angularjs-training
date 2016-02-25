app.controller('customersCtrl', function($rootScope, $scope, $http, mainService, $q) {

    $scope.notificationMsg = "No Notification...";
    init();

    function init() {
        mainService.getIncome().then(function(data) {
            $scope.incomedata = data;
            console.log($scope.incomedata);
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

    //***********For notification from child scope *********************************// 
    $rootScope.$on('handlenotify', function(event, args) {
        $scope.notificationMsg = args;
    });
    //***********End function*******************************************************//
});
