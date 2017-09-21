(function()
{
    "use strict";

    angular.module("ProductsApp", [])
        .config(["$stateProvider", ProductsRouting])

    function ProductsRouting($stateProvider)
    {
        var products = {
            name: "sales.products",
            url: "/products",
            templateUrl: "/views/sales/products/products.html",
            controller: "Sales.ProductsCtrl",
        };

        $stateProvider.state(products);
    }
})();