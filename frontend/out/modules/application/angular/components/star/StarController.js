var StarController = (function () {
    function StarController() {
    }
    StarController.prototype.toggle = function () {
        this.starred = !this.starred;
    };
    return StarController;
})();
exports.StarController = StarController;
//# sourceMappingURL=StarController.js.map