(function()
{
    "use strict";

    angular.module("Booking", [])
        .config(["$stateProvider", BookingRouting])

    function BookingRouting($stateProvider)
    {
        var booking = {
            name: "app.booking",
            url: "/booking",
            templateUrl: "/views/booking/booking.html",
            controller: "BookingCtrl",
        };

        $stateProvider.state(booking);
    }
})();