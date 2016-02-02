var TweetTopbarController = (function () {
    function TweetTopbarController(sharedModel, model) {
        this.sharedModel = sharedModel;
        this.model = model;
    }
    TweetTopbarController.prototype.toggleCollapsed = function () {
        this.model.toggleCollapsed();
    };
    TweetTopbarController.prototype.post = function () {
        this.model.addTweet();
    };
    TweetTopbarController.$inject = ["ISharedModel", "ITopbarModel"];
    return TweetTopbarController;
})();
exports.TweetTopbarController = TweetTopbarController;
//# sourceMappingURL=TweetTopbarController.js.map