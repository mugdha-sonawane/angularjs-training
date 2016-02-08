app.controller('customersCtrl', function($rootScope, $scope, $http, expense,$q) {
    //alert("aaa");
    
    $http.get("json/income.json").then(function(data) {

        $scope.incomedata = data.data;

    });
    $http.get("json/expense.json").then(function(data) {

        $scope.expensedata = data.data;
         $scope.calcualateBalance();

    });

    // $http.get("json/expense.json").then(function(data) {
    //     console.log(data.data);
    //     $scope.expense = data.data;
    // });
    // $scope.incomedata = [{
    //     payer: 'Mugdha',
    //     payee: 'sayali',
    //     category: 'Business',
    //     ModeofPayment: 'Bank',
    //     Amount: 2000,
    //     Notes: 'Added amount',
    //     Type: 'Income'
    // }, {
    //     payer: 'Rishi',
    //     payee: 'Vidya',
    //     category: 'Share Market',
    //     ModeofPayment: 'Cash',
    //     Amount: 300,
    //     Notes: 'Added Cash',
    //     Type: 'Income'
    // }];

    // $scope.expensedata = [{
    //     payer: 'Purva',
    //     payee: 'Anil',
    //     category: 'Business',
    //     ModeofPayment: 'Bank',
    //     Amount: 5000,
    //     Notes: 'Added amount',
    //     Type: 'Expense'

    // }, {
    //     payer: 'prachi',
    //     payee: 'Anuj',
    //     category: 'Share Market',
    //     ModeofPayment: 'Cash',
    //     Amount: 400,
    //     Notes: 'Added Cash',
    //     Type: 'Expense'

    // }];


    $scope.userincomedata = [];
    $scope.userexpensedata = [];
    $scope.showEditIncome_Box = false;
    $scope.showEditExpense_Box = false;

   
    $scope.addIncomeData = function(data) {
        expense.addIncomeData($scope, data);
    };
    $scope.addExpenseData = function(data) {
        expense.addExpenseData($scope, data);

    };
    $scope.calcualateBalance = function() {
            $rootScope.totalincome = 0;
            $rootScope.totalexpense = 0;

            for (var i = 0; i < $scope.incomedata.length; i++) {
                $rootScope.totalincome += parseInt($scope.incomedata[i].Amount);

            }
            for (var i = 0; i < $scope.expensedata.length; i++) {
                $rootScope.totalexpense += parseInt($scope.expensedata[i].Amount);
            }
        }
        


    $scope.removeRow = function(node, param) {
        if (node.Type == "Income") {
            $scope.incomedata.splice(param, 1);
        } else if (node.Type == "Expense") {
            $scope.expensedata.splice(param, 1);
        }
        $scope.calcualateBalance();
    };
    $scope.editRow = function(node, param) {
        expense.editRow(node, param, $scope);
    };
    $scope.updateIncomeData = function(data) {
        expense.updateIncomeData($scope, data);
    };
    $scope.updateExpenseData = function(data) {
        expense.updateExpenseData($scope, data);
    };


});
