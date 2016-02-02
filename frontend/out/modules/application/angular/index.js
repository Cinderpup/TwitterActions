require("angular");
var StarComponent_1 = require("./components/star/StarComponent");
var TwitterApplicationComponent_1 = require("./components/twitterApplication/TwitterApplicationComponent");
angular.module("app.application", [])
    .directive("twitterApplication", function () { return new TwitterApplicationComponent_1.TwitterApplicationComponent(); })
    .directive("star", function () { return new StarComponent_1.StarComponent(); });
//# sourceMappingURL=index.js.map