app.controller("itemsProviderCtrl", function ($scope, $location, $modal, items, itemsService) {
    $scope.items = items;
    $scope.search = function (term) {
        itemsService.getItemsWithTerm(term).then(function (results) {
            $scope.items = results;
        }, function () {
        });
    }


    $scope.$watch('searchTerm', function (newValue, oldValue) {
        if(newValue!=""||oldValue!=""){
            $scope.search(newValue);

        }
    }, true);
});