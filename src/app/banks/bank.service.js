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