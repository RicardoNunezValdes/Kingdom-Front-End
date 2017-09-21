(function()
{
    "use strict";

    angular
        .module("ProductsApp")
        .factory("Product", [ProductModel])

    function ProductModel()
    {
        return function() {};
    }
}());