require("angular");
require("angular-route");
var PageAboutComponent_1 = require("./components/pageAbout/PageAboutComponent");
var routes_1 = require("./configs/routes");
angular.module("app.about", ["ngRoute"])
    .directive("pageAbout", function () { return new PageAboutComponent_1.PageAboutComponent(); })
    .config(routes_1.config);
//# sourceMappingURL=index.js.map