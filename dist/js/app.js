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
(function()
{
    "use strict";

    angular
        .module("AppPlugins", ["Routing"]);
})();
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
(function(){
    "use strict";

    angular
        .module("BanksApp")
        .factory("Bank", [BankModel])

    function BankModel()
    {
        return function()
        {
            this.BankName = "sAA";
        };
    }
}());
(function(){
    "use strict";

    angular
        .module("BanksApp")
        .service("BankService", ["$http", BankService])

    function BankService($http)
    {
        this.endpoints =
        {
            administration:{
                banks: {
                    uri: "admin/banks",
                    resource: "admin/banks/{bankId}"
                }
            }   
        };

        this.Get = function()
        {
            return $http.get(endpoints.administration.banks.uri);
        };
    }
}());
(function()
{
    "use strict";

    angular
        .module("BanksApp")
        .controller("Sales.BanksCtrl", ["$scope", "BankService", "Bank", BanksController])

    function BanksController($scope, BankService, Bank)
    {
        $scope.AddBank = AddBank;
        $scope.AddBank = AddBank;
        $scope.AddBank = AddBank;
        $scope.bankName = "";

        $scope.banks = [
        {
            name: "Banco de Chilesssss"
        },
        {
            name: "Banco Scotiabank"
        },
        {
            name: "Banco Estado"
        }];

        function AddBank()
        {
            if ($scope.bankName)
            {
                var newBank = {
                    name: $scope.bankName
                };

                $scope.banks.push(newBank);
                $scope.bankName = "";
            }
        }

        function GetBanks()
        {
            BankService.Get().then(GetBanksSucceed);
        }

        function GetBanksSucceed(response)
        {
            $scope.banks = response.data;
        }
    }
})();
(function()
{
    "use strict";

    angular.module("ProductsApp", [])
        .config(["$stateProvider", ProductsRouting])

    function ProductsRouting($stateProvider)
    {
        var products = {
            name: "sales.products",
            url: "/products",
            templateUrl: "/views/sales/products/products.html",
            controller: "Sales.ProductsCtrl",
        };

        $stateProvider.state(products);
    }
})();
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
(function()
{
    "use strict";

    angular
        .module("ProductsApp")
        .controller("Sales.ProductsCtrl", ["$scope", "ProductsService", "Product", ProductsController])

    function ProductsController($scope, ProductsService, Product)
    {
        $scope.title = "Productos !!";
    }
})();
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
(function()
{
    "use strict";

    angular
        .module("MainApp", ["AppPlugins", "WelcomeApp", "SalesApp"]);
})();
(function()
{
    "use strict";

    angular
        .module("MainApp")
        .controller("MainCtrl", ["$scope", MainController]);

    function MainController($scope)
    {
        $scope.name = "Ricardo Nuñezzss";
    }
})();