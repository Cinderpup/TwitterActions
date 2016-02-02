var StarController_1 = require("./StarController");
var StarComponent = (function () {
    function StarComponent() {
        this.restrict = "E";
        this.controllerAs = "starVm";
        this.bindToController = true;
        this.scope = {
            starred: "="
        };
        this.template = require("./index.html");
        this.controller = StarController_1.StarController;
    }
    return StarComponent;
})();
exports.StarComponent = StarComponent;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StarComponent;
//# sourceMappingURL=StarComponent.js.map