config.$inject = ["$routeProvider"];
function config($routeProvider) {
    $routeProvider.when("/about", {
        template: "<page-about></page-about>"
    });
}
exports.config = config;
//# sourceMappingURL=routes.js.map