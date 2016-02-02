require("angular");
require("font-awesome/css/font-awesome.css");
require("bootstrap/dist/css/bootstrap.css");
require("./styles/screen.scss");
var ActionComponent_1 = require("./modules/pages/action/ActionComponent");
var ResultsComponent_1 = require("./modules/pages/results/ResultsComponent");
angular.module("app", [])
    .directive("actions", function () { return new ActionComponent_1.ActionsComponent(); })
    .directive("results", function () { return new ResultsComponent_1.ResultsComponent(); });
angular.bootstrap(document, ["app"], {
    strictDi: true
});
//# sourceMappingURL=index.js.map