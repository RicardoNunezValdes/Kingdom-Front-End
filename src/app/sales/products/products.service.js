(function()
{
    "use strict";

    angular
        .module("ProductsApp")
        .service("ProductsService", ["$http", ProductsService])

    function ProductsService($http)
    {
        this.Get = function()
        {
            return $http.get("/sales/products");
        };
    }
}());