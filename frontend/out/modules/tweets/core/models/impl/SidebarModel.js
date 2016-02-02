var SidebarModel = (function () {
    function SidebarModel(sharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
    SidebarModel.prototype.toggleCollapsed = function () {
        this.sharedModel.toggleSidebar();
    };
    SidebarModel.$inject = ["ISharedModel"];
    return SidebarModel;
})();
exports.SidebarModel = SidebarModel;
//# sourceMappingURL=SidebarModel.js.map