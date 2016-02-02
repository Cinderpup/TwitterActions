var Tweet_1 = require("../../entities/Tweet");
var TopbarModel = (function () {
    function TopbarModel(sharedModel) {
        this.sharedModel = sharedModel;
    }
    TopbarModel.prototype.toggleCollapsed = function () {
        this.sharedModel.toggleTopbar();
    };
    TopbarModel.prototype.addTweet = function () {
        this.sharedModel.tweets.push(Tweet_1.Tweet.createInstance("@brecht", this.tweetContent, false));
        this.tweetContent = "";
    };
    TopbarModel.$inject = ["ISharedModel"];
    return TopbarModel;
})();
exports.TopbarModel = TopbarModel;
//# sourceMappingURL=TopbarModel.js.map