var TweetContentController_1 = require("./TweetContentController");
var TweetContentComponent = (function () {
    function TweetContentComponent() {
        this.restrict = "E";
        this.controllerAs = "contentVm";
        this.template = require("./index.html");
        this.controller = TweetContentController_1.TweetContentController;
    }
    return TweetContentComponent;
})();
exports.TweetContentComponent = TweetContentComponent;
//# sourceMappingURL=TweetContentComponent.js.map