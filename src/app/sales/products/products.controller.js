(function()
{
    "use strict";

    angular
        .module("ProductsApp")
        .controller("Sales.ProductsCtrl", ["$scope", "ProductsService", "Product", ProductsController])

    function ProductsController($scope, ProductsService, Product)
    {
        $scope.title = "Productos !!";
    }
})();