var SharedModel = (function () {
    function SharedModel(tweetService) {
        this._sidebarCollapsed = false;
        this._topbarCollapsed = false;
        this.tweets = tweetService.getAll();
    }
    Object.defineProperty(SharedModel.prototype, "topbarCollapsed", {
        get: function () {
            return this._topbarCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedModel.prototype, "sidebarCollapsed", {
        get: function () {
            return this._sidebarCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    SharedModel.prototype.toggleTopbar = function () {
        this._topbarCollapsed = !this._topbarCollapsed;
    };
    SharedModel.prototype.toggleSidebar = function () {
        this._sidebarCollapsed = !this._sidebarCollapsed;
    };
    SharedModel.$inject = ["ITweetService"];
    return SharedModel;
})();
exports.SharedModel = SharedModel;
//# sourceMappingURL=SharedModel.js.map