require("../../index");
require("angular");
require("angular-mocks");
var ComponentTest_1 = require("../../../../util/ComponentTest");
describe("Component StarComponent", function () {
    var directiveTest;
    beforeEach(angular.mock.module("app.application"));
    beforeEach(function () {
        directiveTest = new ComponentTest_1.ComponentTest("<star starred=\"starred\"></star>", "star");
    });
    describe("the passed starred value is false", function () {
        it("it should set the default starred value to false", function () {
            var attributes = { starred: false };
            var vm = directiveTest.createComponent(attributes);
            expect(vm.starred).toBe(false);
        });
        it("should update the ui accordingly", function () {
            var attributes = { starred: false };
            var vm = directiveTest.createComponent(attributes);
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(false);
            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(true);
        });
    });
    describe("when the passed starred value is true", function () {
        it("should set the default starred value to true", function () {
            var attributes = { starred: true };
            var vm = directiveTest.createComponent(attributes);
            expect(vm.starred).toBe(true);
        });
    });
    describe("when toggle()", function () {
        it("should toggle the starred property", function () {
            var attributes = { starred: false };
            var vm = directiveTest.createComponent(attributes);
            vm.toggle();
            expect(vm.starred).toBe(true);
            vm.toggle();
            expect(vm.starred).toBe(false);
        });
        it("should update the ui accordingly", function () {
            var attributes = { starred: false };
            var vm = directiveTest.createComponent(attributes);
            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(true);
            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(false);
        });
    });
});
//# sourceMappingURL=StarComponent.spec.js.map