(function()
{
    "use strict";

    angular.module("BanksApp", [])
        .config(["$stateProvider", BanksRouting])

    function BanksRouting($stateProvider)
    {
        var banks = {
            name: "sales.banks",
            url: "/banks",
            templateUrl: "/views/sales/banks/banks.html",
            controller: "Sales.BanksCtrl",
        };

        $stateProvider.state(banks);
    }
})();