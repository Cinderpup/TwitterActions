var ComponentTest = (function () {
    function ComponentTest(template, registerName) {
        var _this = this;
        this.template = template;
        this.registerName = registerName;
        angular.mock.inject(function ($rootScope, $compile) {
            _this.rootScope = $rootScope;
            _this.compile = $compile;
        });
    }
    ComponentTest.prototype.createComponent = function (attributes) {
        this.scope = this.rootScope.$new();
        for (var key in attributes) {
            this.scope[key] = attributes[key];
        }
        this.element = this.compile(this.template)(this.scope);
        this.scope.$digest();
        return this.element.controller(this.registerName);
    };
    return ComponentTest;
})();
exports.ComponentTest = ComponentTest;
//# sourceMappingURL=ComponentTest.js.map