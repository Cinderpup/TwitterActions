require("../../index");
require("angular");
require("angular-mocks");
var ComponentTest_1 = require("../../../../util/ComponentTest");
describe("Component PageTweetsComponent", function () {
    var directiveTest;
    var sharedModelMock;
    beforeEach(angular.mock.module("app.tweets", function ($provide) {
        sharedModelMock = {};
        $provide.service("ISharedModel", function () { return sharedModelMock; });
    }));
    beforeEach(function () {
        directiveTest = new ComponentTest_1.ComponentTest("<page-tweets></page-tweets>", "pageTweets");
    });
    it("should expose the sharedModel", function () {
        var vm = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});
//# sourceMappingURL=PageTweetsComponent.spec.js.map