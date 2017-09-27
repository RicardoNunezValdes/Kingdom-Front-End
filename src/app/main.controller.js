(function()
{
    "use strict";

    angular
        .module("KingdomApp")
        .controller("MainCtrl", ["$scope", MainController]);

    function MainController($scope)
    {
        $scope.name = "Ricardo Nuñezzss";
    }
})();