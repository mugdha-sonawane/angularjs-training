angular.module('myApp').service('expense', function() {

    return {
        showIncomeBox: function(param) {
            param.showIncome_Box = true;
            param.showExpend_Box = false;
            param.showEditIncome_Box = false;
            param.showEditExpense_Box = false;
            console.log("hi");
        },
        showExpendBox: function(param) {
            param.showIncome_Box = false;
            param.showExpend_Box = true;
            param.showEditIncome_Box = false;
            param.showEditExpense_Box = false;
        },
        addIncomeData: function(param,data) {
            param.incomedata.push({
                payer: data.payer,
                payee: data.payee,
                category: data.category,
                ModeofPayment: data.modeofpayment,
                Amount: data.amount,
                Notes: data.notes,
                Type: 'Income'
            });
            param.calcualateBalance();
        },
        addExpenseData: function(param,data) {           
            param.expensedata.push({
                payer: data.payer,
                payee: data.payee,
                category: data.category,
                ModeofPayment: data.modeofpayment,
                Amount: data.amount,
                Notes: data.notes,
                Type: 'Expense'
            });
            param.calcualateBalance();
        },
        editRow: function(node, param, $scope) {
            if (node.Type == "Income") {
                $scope.showEditIncome_Box = true;
                $scope.showIncome_Box = false;
                $scope.showEditExpense_Box = false;
                $scope.showExpend_Box = false;

                $scope.editLocation = param;
                $scope.data = [];
                $scope.data.incpayer = $scope.incomedata[param].payer;
                $scope.data.incpayee = $scope.incomedata[param].payee;
                $scope.data.inccategory = $scope.incomedata[param].category;
                $scope.data.incmodeofpayment = $scope.incomedata[param].ModeofPayment;
                $scope.data.incAmount = $scope.incomedata[param].Amount;
                $scope.data.incnotes = $scope.incomedata[param].Notes;

            } else if (node.Type == "Expense") {
             
                $scope.showEditIncome_Box = false;
                $scope.showIncome_Box = false;
                $scope.showEditExpense_Box = true;
                $scope.showExpend_Box = false;

                $scope.editLocation = param;
                $scope.data = [];
                $scope.data.exppayer = $scope.expensedata[param].payer;
                $scope.data.exppayee = $scope.expensedata[param].payee;
                $scope.data.expcategory = $scope.expensedata[param].category;
                $scope.data.expmodeofpayment = $scope.expensedata[param].ModeofPayment;
                $scope.data.expAmount = $scope.expensedata[param].Amount;
                $scope.data.expnotes = $scope.expensedata[param].Notes;
            }
            $scope.calcualateBalance();
        },
        updateIncomeData: function($scope,data) {
            $scope.incomedata[$scope.editLocation].payer = data.incpayer;
            $scope.incomedata[$scope.editLocation].payee = data.incpayee;
            $scope.incomedata[$scope.editLocation].category = data.inccategory;
            $scope.incomedata[$scope.editLocation].modeofpayment = data.incmodeofpayment;
            $scope.incomedata[$scope.editLocation].Amount = data.incAmount;
            $scope.incomedata[$scope.editLocation].Notes = data.incnotes;

            // $scope.incpayer = "";
            // $scope.incpayee = "";
            // $scope.inccategory = "";
            // $scope.incmodeofpayment = "";
            // $scope.incAmount = "";
            // $scope.incnotes = "";

            $scope.showEditIncome_Box = true;
            $scope.showIncome_Box = false;
            $scope.showEditExpense_Box = false;
            $scope.showExpend_Box = false;

            $scope.calcualateBalance();
        },
        updateExpenseData: function($scope,data) {
            $scope.expensedata[$scope.editLocation].payer = data.exppayer;
            $scope.expensedata[$scope.editLocation].payee = data.exppayee;
            $scope.expensedata[$scope.editLocation].category = data.expcategory;
            $scope.expensedata[$scope.editLocation].modeofpayment = data.expmodeofpayment;
            $scope.expensedata[$scope.editLocation].Amount = data.expAmount;
            $scope.expensedata[$scope.editLocation].Notes = data.expnotes;

            // $scope.exppayer = "";
            // $scope.exppayee = "";
            // $scope.expcategory = "";
            // $scope.expmodeofpayment = "";
            // $scope.expAmount = "";
            // $scope.expnotes = "";

            $scope.showEditIncome_Box = false;
            $scope.showIncome_Box = false;
            $scope.showEditExpense_Box = true;
            $scope.showExpend_Box = false;

            $scope.calcualateBalance();
        }
    }

});
