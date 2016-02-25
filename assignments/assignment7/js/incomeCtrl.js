app.controller('incomeCtrl', function($rootScope, $scope, $http, mainService, $q, $state, $timeout) {


    $scope.removeRow = function(index, seltype) {
        mainService.delete(index, seltype);
        $rootScope.$emit('getTotal');
    };

    $scope.editRow = function(param) {
        mainService.incomeIndex = param;
        
        console.log($scope.incomes.Date);
        var broadcastObj = {};
        broadcastObj.data = $scope.data;
        console.log(broadcastObj.data);
        broadcastObj.editLocation = $scope.editLocation;
        $rootScope.$broadcast('incomeBindData', broadcastObj);
    };

    $timeout(function() {
        $rootScope.$broadcast('incomeBindData');
    }, 2000);
});
