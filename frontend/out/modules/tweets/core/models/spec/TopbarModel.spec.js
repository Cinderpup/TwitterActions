var TopbarModel_1 = require("../impl/TopbarModel");
describe("Model: TopbarModel", function () {
    var sharedModelMock;
    var topbarModel;
    beforeEach(function () {
        sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        sharedModelMock.tweets = [];
        sharedModelMock.sidebarCollapsed = false;
        sharedModelMock.topbarCollapsed = false;
        topbarModel = new TopbarModel_1.TopbarModel(sharedModelMock);
    });
    describe("on toggleCollapsed()", function () {
        it("should collapse the topbar", function () {
            topbarModel.toggleCollapsed();
            expect(sharedModelMock.toggleTopbar).toHaveBeenCalled();
        });
    });
    describe("on addTweet", function () {
        it("should add a tweet", function () {
            topbarModel.tweetContent = "";
            var originalLength = sharedModelMock.tweets.length;
            topbarModel.addTweet();
            expect(sharedModelMock.tweets.length).toBe(originalLength + 1);
        });
    });
});
//# sourceMappingURL=TopbarModel.spec.js.map