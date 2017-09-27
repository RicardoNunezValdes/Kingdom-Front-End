(function()
{
    "use strict";

    angular
        .module("Routing", ["ui.router"])
        // .config(["$stateProvider", BaseStatesConfigurator])
        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "$urlMatcherFactoryProvider", GeneralRoutingConfigurator]);

    function GeneralRoutingConfigurator($stateProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider)
    {
        // Enable HTML5 mode to remove the '#' sign from the url
        $locationProvider.html5Mode(
        {
            enabled: true,
            requireBase: false
        });

        $urlMatcherFactoryProvider.strictMode(false);

        // In any unusual case, navigate dashboard
        $urlRouterProvider.otherwise("/app/dashboard");
        $urlRouterProvider.when("/app", "/app/dashboard");
    }

    function BaseStatesConfigurator($stateProvider)
    {
        // var app = {
        //     name: "app",
        //     url: "",
        //     templateUrl: "views/index.html",
        //     controller: "",
        // };

        // $stateProvider.add(app);
    }
})();