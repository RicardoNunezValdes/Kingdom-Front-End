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