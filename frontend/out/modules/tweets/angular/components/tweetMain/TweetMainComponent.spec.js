require("angular");
require("angular-mocks");
require("../../index");
var ComponentTest_1 = require("../../../../util/ComponentTest");
describe("Component TweetSidebarComponent", function () {
    var directiveTest;
    var sharedModelMock;
    beforeEach(angular.mock.module("app.tweets", function ($provide) {
        sharedModelMock = {};
        $provide.service("ISharedModel", function () { return sharedModelMock; });
    }));
    beforeEach(function () {
        directiveTest = new ComponentTest_1.ComponentTest("<tweet-main></tweet-main>", "tweetMain");
    });
    it("should expose the sharedModel", function () {
        var vm = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});
//# sourceMappingURL=TweetMainComponent.spec.js.map