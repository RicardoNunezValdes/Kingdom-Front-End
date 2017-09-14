(function()
{
    "use strict";

    angular
        .module("BanksApp")
        .controller("BanksCtrl", ["$scope", "BankService", "Bank", BanksController])

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