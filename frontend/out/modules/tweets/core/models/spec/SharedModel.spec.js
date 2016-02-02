var SharedModel_1 = require("../impl/SharedModel");
var Tweet_1 = require("../../entities/Tweet");
describe("model: SharedModel", function () {
    var tweetServiceMock;
    var sharedModel;
    var getAllResult = [new Tweet_1.Tweet("@test", "test", false)];
    beforeEach(function () {
        tweetServiceMock = jasmine.createSpyObj("TweetService", ["getAll"]);
        tweetServiceMock.getAll.and.returnValue(getAllResult);
        sharedModel = new SharedModel_1.SharedModel(tweetServiceMock);
    });
    describe("on initialization", function () {
        it("should set the topbarCollapsed property to false by default", function () {
            expect(sharedModel.topbarCollapsed).toBe(false);
        });
        it("should set the sidebarCollapsed property to false by default", function () {
            expect(sharedModel.sidebarCollapsed).toBe(false);
        });
        it("should get the tweets from the service", function () {
            expect(sharedModel.tweets).toBe(getAllResult);
        });
    });
    describe("When toggleTopbar()", function () {
        it("should collapse the topbar", function () {
            sharedModel.toggleTopbar();
            expect(sharedModel.topbarCollapsed).toBe(true);
            sharedModel.toggleTopbar();
            expect(sharedModel.topbarCollapsed).toBe(false);
        });
    });
    describe("When toggleSidebar()", function () {
        it("should collapse the sidebar", function () {
            sharedModel.toggleSidebar();
            expect(sharedModel.sidebarCollapsed).toBe(true);
            sharedModel.toggleSidebar();
            expect(sharedModel.sidebarCollapsed).toBe(false);
        });
    });
});
//# sourceMappingURL=SharedModel.spec.js.map