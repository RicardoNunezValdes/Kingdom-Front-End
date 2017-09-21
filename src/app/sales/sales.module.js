(function()
{
    "use strict";

    angular
        .module("SalesApp", ["BanksApp", "ProductsApp"])
        .config(["$stateProvider", SalesRouting])

    function SalesRouting($stateProvider)
    {
        var sales = {
            name: "sales",
            url: "/sales",
            abstract: true
                // template: "<h2>Ventas</h2><ui-view/>"
        };

        $stateProvider.state(sales);
    }
})();