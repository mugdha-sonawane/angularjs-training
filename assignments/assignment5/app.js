var app = angular.module('myApp', ['ui.router', 'ngAnimate']);


app.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/home');

    $stateProvider


        .state('showIncomeTable', {
            url: '/showIncomeTable',
            templateUrl: 'pages/showIncomeTable.html'

        })
        .state('showExpenseTable', {
            url: '/showExpenseTable',
            templateUrl: 'pages/showExpenseTable.html'

        })
        .state('addIncome', {
            url: '/addIncome',
            templateUrl: 'pages/addIncome.html'

        })
        .state('editIncome', {
            url: '/editIncome',
            templateUrl: 'pages/editIncome.html'

        })
        .state('editExpense', {
            url: '/editExpense',
            templateUrl: 'pages/editExpense.html'

        })
        .state('addExpense', {
            url: '/addExpense',
            templateUrl: 'pages/addExpense.html'

        });


});

// app.controller('customersCtrl', function($scope, $http, expense) {

// });
