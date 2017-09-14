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