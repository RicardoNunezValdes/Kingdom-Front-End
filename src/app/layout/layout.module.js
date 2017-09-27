(function()
{
    "use strict";

    angular.module("LayoutApp", [])
        .config(["$stateProvider", "$urlRouterProvider", LayoutAppRouting])

    function LayoutAppRouting($stateProvider, $urlRouterProvider)
    {
        var layout = {
            name: "app",
            url: "/app",
            templateUrl: "/dist/views/layout/layout.html"
        };

        $stateProvider.state(layout);
    }
})();