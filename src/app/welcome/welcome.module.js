(function()
{
    "use strict";

    angular.module("WelcomeApp", [])
        .config(["$stateProvider", "$urlRouterProvider", WelcomeRouting])

    function WelcomeRouting($stateProvider, $urlRouterProvider)
    {
        var welcome = {
            name: "welcome",
            url: "/welcome",
            templateUrl: "/views/welcome/welcome.html"
        };

        $stateProvider.state(welcome);

        // In any unusual case, navigate home
        $urlRouterProvider.otherwise("welcome");
    }
})();