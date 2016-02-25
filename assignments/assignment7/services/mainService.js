angular.module('myApp').service('mainService', function($q, $http) {


    var obj = {};
    obj.incomes = {};
    obj.expenses = {};
    obj.incomesNotify = [];
    obj.expenseNotify = [];
    obj.incomeIndex = -1;
    obj.expenseIndex = -1;

    obj.getIncome = function() {
        var deferred = $q.defer();
        $http.get("json/income.json").then(function(data) {
            obj.incomes = data.data;
            deferred.resolve(data.data);
        });
        return deferred.promise;
    };
    obj.getExpense = function() {
        var deferred = $q.defer();
        $http.get("json/expense.json").then(function(data) {
            obj.expenses = data.data;
            deferred.resolve(data.data);
        });
        return deferred.promise;
    };

    obj.save = function(type, data) {
        if (type == "income") {
            obj.incomes.push(data);
        } else {
            obj.expenses.push(data);
        }
    };

    obj.update = function(type, data) {
        if (type == "income") {
            obj.incomes[obj.incomeIndex] = data;
        } else if (type == "expense") {
            obj.expenses[obj.expenseIndex] = data;
        }
    };
    obj.categorys = function() {

    };

    obj.saveNotify = function(data, selType) {
        var setObj = (selType == "Income") ? obj.incomesNotify : obj.expenseNotify;
        setObj.push(data);
    }


    obj.calcualateBalance = function(type) {
        var totalbal = 0;

        if (type == "income") {
            for (var i = 0; i < obj.incomes.length; i++) {
                totalbal += parseInt(obj.incomes[i].Amount);
            }
        } else if (type == "expense") {
            for (var i = 0; i < obj.expenses.length; i++) {
                totalbal += parseInt(obj.expenses[i].Amount);
            }
        }
        return totalbal;
    };
    obj.delete = function(index, type) {
        if (type == "income") {
            obj.incomes.splice(index, 1);
        } else if (type == "expense") {
            obj.expenses.splice(index, 1);
        }
    };
    return obj;
});
