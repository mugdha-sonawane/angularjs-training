var app = angular.module('myApp', ['ui.router', 'ngAnimate']);


app.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/index_view');

    $stateProvider


        .state('income', {
            url: '/income',
            templateUrl: 'pages/income.html',
            controller: "incomeCtrl"
        })
        .state('income.add', {
            url: "/add",
            templateUrl: "pages/income.add.html",
            controller: "incomeAddCtrl"
        })
        .state('income.edit', {
            url: "/edit",
            templateUrl: "pages/income.edit.html"
        })
        .state('expense', {
            url: '/expense',
            templateUrl: 'pages/expense.html',
            controller: "expenseCtrl"
        })
        .state('expense.add', {
            url: "/add",
            templateUrl: "pages/expense.add.html",
            controller: "expenseAddCtrl"
        })
        .state('expense.edit', {
            url: "/edit",
            templateUrl: "pages/expense.edit.html",
            controller: "expenseEditCtrl"
        })
        .state('settings', {
            url: "/add",
            templateUrl: "pages/settings.html",
            controller: "settingsCtrl"
        });



});

// app.controller('customersCtrl', function($scope, $http, expense) {

// });
