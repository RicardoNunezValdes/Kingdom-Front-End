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