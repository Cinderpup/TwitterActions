var ContentModel_1 = require("../impl/ContentModel");
describe("model: ContentModel", function () {
    describe("on initialization", function () {
        it("should expose the tweets passed from the sharedModel", function () {
            var sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
            sharedModelMock.tweets = [];
            sharedModelMock.sidebarCollapsed = false;
            sharedModelMock.topbarCollapsed = false;
            var contentModel = new ContentModel_1.ContentModel(sharedModelMock);
            expect(contentModel.tweets).toBe(sharedModelMock.tweets);
        });
    });
});
//# sourceMappingURL=ContentModel.spec.js.map