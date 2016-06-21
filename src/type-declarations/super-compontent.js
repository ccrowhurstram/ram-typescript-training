var SuperComponent;
(function (SuperComponent) {
    angular.module("super-component", [])
        .factory("myService", myService);
    myService.$inject = ["$location"];
    function myService($location) {
        return (function () {
            function MyService() {
            }
            MyService.prototype._doPrivateStuff = function () { };
            MyService.prototype.getUrl = function () { return $location.url(); };
            return MyService;
        }());
    }
})(SuperComponent || (SuperComponent = {}));