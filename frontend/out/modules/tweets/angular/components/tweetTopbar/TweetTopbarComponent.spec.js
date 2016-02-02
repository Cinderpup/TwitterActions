require("angular");
require("angular-mocks");
require("../../index");
var ComponentTest_1 = require("../../../../util/ComponentTest");
describe("Component TweetTopbarComponent", function () {
    var directiveTest;
    var sharedModelMock;
    var topbarModelMock;
    beforeEach(angular.mock.module("app.tweets", function ($provide) {
        topbarModelMock = jasmine.createSpyObj("topbarModel", ["toggleCollapsed", "addTweet"]);
        sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        $provide.service("ISharedModel", function () { return sharedModelMock; });
        $provide.service("ITopbarModel", function () { return topbarModelMock; });
    }));
    beforeEach(function () {
        directiveTest = new ComponentTest_1.ComponentTest("<tweet-topbar></tweet-topbar>", "tweetTopbar");
    });
    it("should expose the sharedModel", function () {
        var vm = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
    it("should expose the topbarModel", function () {
        var vm = directiveTest.createComponent({});
        expect(vm.model).toEqual(topbarModelMock);
    });
    describe("on toggleCollapsed()", function () {
        it("should collapse the topbar", function () {
            var vm = directiveTest.createComponent({});
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
    describe("on post()", function () {
        it("should post a tweet", function () {
            var vm = directiveTest.createComponent({});
            vm.post();
            expect(vm.model.addTweet).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=TweetTopbarComponent.spec.js.map