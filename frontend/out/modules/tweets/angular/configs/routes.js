config.$inject = ["$routeProvider"];
function config($routeProvider) {
    $routeProvider.when("/", {
        template: "<page-tweets></page-tweets>"
    });
}
exports.config = config;
//# sourceMappingURL=routes.js.map