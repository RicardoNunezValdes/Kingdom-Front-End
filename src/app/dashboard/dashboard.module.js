(function()
{
    "use strict";

    angular.module("Dashboard", [])
        .config(["$stateProvider", Dashboardouting])

    function Dashboardouting($stateProvider)
    {
        var dashboard = {
            name: "app.dashboard",
            url: "/dashboard",
            templateUrl: "/views/dashboard/dashboard.html",
            controller: "DashboardCtrl",
        };

        $stateProvider.state(dashboard);
    }
})();