(function () {
    "use strict";

    angular.module("BanksApp", []);
})();
(function(){
    "use strict";

    angular
        .module("BanksApp")
        .service("BankService", ["$http", "endpoints", BankService])

    function BankService($http, endpoints)
    {
        // this.endpoints =
        // {
        //     administration:{
        //         banks: {
        //             uri: "admin/banks",
        //             resource: "admin/banks/{bankId}"
        //         }
        //     }   
        // };

        this.Get = function()
        {
            return $http.get(endpoints.banks.uri);
        };
    }
}());
(function()
{
    "use strict";

    angular
        .module("BanksApp")
        .controller("BanksCtrl", ["$scope", "BankService", BanksController])

    function BanksController($scope, BankService)
    {
        $scope.AddBank = AddBank;
        $scope.bankName = "";

        $scope.banks = [
        {
            name: "Banco de Chile"
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

    angular
        .module("BanksApp")
        .controller("Banks.EditorCtrl", ["$scope", "BankService", BanksEditorController])

    function BanksEditorController($scope, BankService)
    {
    }
})();
(function()
{
    "use strict";

    angular
        .module("MainApp", ["BanksApp"]);
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