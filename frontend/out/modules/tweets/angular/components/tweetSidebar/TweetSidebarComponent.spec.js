require("angular");
require("angular-mocks");
require("../../index");
var ComponentTest_1 = require("../../../../util/ComponentTest");
describe("Component TweetSidebarComponent", function () {
    var directiveTest;
    var sharedModelMock;
    var sidebarModelMock;
    beforeEach(angular.mock.module("app.tweets", function ($provide) {
        sidebarModelMock = jasmine.createSpyObj("sidebarModel", ["toggleCollapsed"]);
        sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggletopbar", "toggleSidebar"]);
        $provide.service("ISharedModel", function () { return sharedModelMock; });
        $provide.service("ISidebarModel", function () { return sidebarModelMock; });
    }));
    beforeEach(function () {
        directiveTest = new ComponentTest_1.ComponentTest("<tweet-sidebar></tweet-sidebar>", "tweetSidebar");
    });
    it("should expose the sharedModel", function () {
        var vm = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
    it("should expose the sidebarModel", function () {
        var vm = directiveTest.createComponent({});
        expect(vm.model).toEqual(sidebarModelMock);
    });
    describe("on toggleCollapsed()", function () {
        it("should collapse the sidebar", function () {
            var vm = directiveTest.createComponent({});
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=TweetSidebarComponent.spec.js.map