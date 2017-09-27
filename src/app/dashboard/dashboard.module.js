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
            templateUrl: "/views/dashboard/dashboard.html",
            controller: "DashboardCtrl",
        };

        $stateProvider.state(dashboard);

        // In any unusual case, navigate dashboard
        $urlRouterProvider.otherwise("/app/dashboard");
        $urlRouterProvider.when("/app", "/app/dashboard");
    }
})();