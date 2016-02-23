app.controller('incomeAddCtrl', function($rootScope, $scope, $http, mainService, $q) {

    $scope.addIncomeData = function(data) {

        mainService.save("income", data);
        $rootScope.$emit('getTotal');
        $scope.myForm.$setPristine();
        $scope.userincomedata = {};
    };

});
