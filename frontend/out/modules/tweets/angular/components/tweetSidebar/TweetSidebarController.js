var TweetSidebarController = (function () {
    function TweetSidebarController(model, sharedModel) {
        this.model = model;
        this.sharedModel = sharedModel;
    }
    TweetSidebarController.prototype.toggleCollapsed = function () {
        this.model.toggleCollapsed();
    };
    TweetSidebarController.$inject = ["ISidebarModel", "ISharedModel"];
    return TweetSidebarController;
})();
exports.TweetSidebarController = TweetSidebarController;
//# sourceMappingURL=TweetSidebarController.js.map