(function()
{
    "use strict";

    angular.module("Dashboard", [])
        .config(["$stateProvider", "$urlRouterProvider", Dashboardouting])

    function Dashboardouting($stateProvider, $urlRouterProvider)
    {
        var dashboard = {
            name: "app.dashboard",
            url: "/dashboard",
            templateUrl: "/dist/views/dashboard/dashboard.html",
            controller: "DashboardCtrl",
        };

        $stateProvider.state(dashboard);
    }
})();