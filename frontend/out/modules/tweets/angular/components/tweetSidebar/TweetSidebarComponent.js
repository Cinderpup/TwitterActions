var TweetSidebarController_1 = require("./TweetSidebarController");
var TweetSidebarComponent = (function () {
    function TweetSidebarComponent() {
        this.restrict = "E";
        this.controllerAs = "sidebarVm";
        this.template = require("./index.html");
        this.controller = TweetSidebarController_1.TweetSidebarController;
    }
    return TweetSidebarComponent;
})();
exports.TweetSidebarComponent = TweetSidebarComponent;
//# sourceMappingURL=TweetSidebarComponent.js.map