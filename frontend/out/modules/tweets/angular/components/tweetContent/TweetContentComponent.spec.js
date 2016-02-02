require("../../index");
require("angular");
require("angular-mocks");
var ComponentTest_1 = require("../../../../util/ComponentTest");
describe("Component TweetContentComponent", function () {
    var directiveTest;
    var contentModelMock;
    beforeEach(angular.mock.module("app.tweets", function ($provide) {
        contentModelMock = {};
        $provide.service("IContentModel", function () { return contentModelMock; });
    }));
    beforeEach(function () {
        directiveTest = new ComponentTest_1.ComponentTest("<tweet-content></tweet-content>", "tweetContent");
    });
    it("should expose the sharedModel", function () {
        var vm = directiveTest.createComponent({});
        expect(vm.model).toBe(contentModelMock);
    });
});
//# sourceMappingURL=TweetContentComponent.spec.js.map