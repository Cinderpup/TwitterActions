var TweetMainController_1 = require("./TweetMainController");
var TweetMainComponent = (function () {
    function TweetMainComponent() {
        this.restrict = "E";
        this.controllerAs = "mainVm";
        this.template = require("./index.html");
        this.controller = TweetMainController_1.TweetMainController;
    }
    return TweetMainComponent;
})();
exports.TweetMainComponent = TweetMainComponent;
//# sourceMappingURL=TweetMainComponent.js.map