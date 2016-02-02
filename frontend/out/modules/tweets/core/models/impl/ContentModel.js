var ContentModel = (function () {
    function ContentModel(sharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
    ContentModel.$inject = ["ISharedModel"];
    return ContentModel;
})();
exports.ContentModel = ContentModel;
//# sourceMappingURL=ContentModel.js.map