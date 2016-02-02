var TweetTopbarController_1 = require("./TweetTopbarController");
var TweetTopbarComponent = (function () {
    function TweetTopbarComponent() {
        this.restrict = "E";
        this.controllerAs = "topbarVm";
        this.template = require("./index.html");
        this.controller = TweetTopbarController_1.TweetTopbarController;
    }
    return TweetTopbarComponent;
})();
exports.TweetTopbarComponent = TweetTopbarComponent;
//# sourceMappingURL=TweetTopbarComponent.js.map