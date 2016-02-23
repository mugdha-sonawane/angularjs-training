app.controller('expenseCtrl', function($rootScope, $scope, $http, mainService, $q,$state,$timeout) {

   
    $scope.removeRow = function(index, seltype) {
        mainService.delete(index, seltype);
        $rootScope.$emit('getTotal');
    };

    $scope.editRow = function(param) {
        mainService.expenseIndex = param;
        var broadcastObj = {};
        broadcastObj.data = $scope.data;
        broadcastObj.editLocation = $scope.editLocation;
        $rootScope.$broadcast('expenseBindData', broadcastObj);
    };
    
    $timeout(function() {
        $rootScope.$broadcast('expenseBindData');
    }, 2000);
});
