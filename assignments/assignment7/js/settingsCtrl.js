app.controller('settingsCtrl', function($rootScope, $scope, $http, mainService, $q, $state, $timeout, $interval, $filter) {

    var amt = { "type": "", "amount": "", "date": "date", "category": "" };
    var showAmt = [];
    var showNotify = "";
    var notification = "";
    var checkRadioOpt = "";

    $scope.radioValue = function(value) {
        checkRadioOpt = value;
    }

    $scope.submitMyForm = function(data) {
        console.log(data)
        mainService.saveNotify(data, checkRadioOpt);
        show(data.value, data.recurrType);
    }

    function show(checkRadioOpt, recurType) {
        if (checkRadioOpt == "Income") {
            bindNotify("Income", mainService.incomesNotify, mainService.incomes, recurType);
        } else if (checkRadioOpt == "Expense") {
            bindNotify("Expense", mainService.expenseNotify, mainService.expenses, recurType);
        }
    }

    function bindNotify(selType, notifyArr, incomeArr, recurType) {
        console.log(notifyArr);
        console.log(incomeArr);
        for (var i = 0; i < notifyArr.length; i++) {
            for (var j = 0; j < incomeArr.length; j++) {
                if (incomeArr[j].category == notifyArr[i].category) {
                    amt.type = selType;
                    amt.amount = incomeArr[j].Amount;
                    if (recurType == "yearly") {
                        var userdob = new Date(incomeArr[j].Date);
                        userdob.setYear(userdob.getFullYear() + 1)
                        amt.date = userdob;
                        //amt.date = $filter('Date')(new Date(userdob), 'dd-MM-yyyy');
                    } else {
                        var userdob = new Date(incomeArr[j].Date);
                        userdob.setMonth(userdob.getMonth() + 1);
                        amt.date = userdob;
                        //amt.date = $filter('Date')(new Date(userdob), 'dd-MM-yyyy');
                    }

                    amt.category = notifyArr[i].category;
                    showAmt.push(amt);
                }
            }
        }

        for (var i = 0; i < showAmt.length; i++) {
            notification = "[ " + showAmt[i]["type"] + " -- " + showAmt[i]["category"] + " -- Due Date: " + showAmt[i]["date"] + " -- amount: " + showAmt[i]["amount"] + " ], ";
        }
        
        showNotify += notification;
        $rootScope.$emit('handlenotify', showNotify);
    }

});
app.directive('myNotificationScope', function() {
    return {
        restrict: 'EA',
        templateUrl: 'pages/notification.html',
        replace: true
    };
});
