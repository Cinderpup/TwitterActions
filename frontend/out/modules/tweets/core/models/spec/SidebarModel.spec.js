var SidebarModel_1 = require("../impl/SidebarModel");
describe("Model: SidebarModel", function () {
    var sharedModelMock;
    var sidebarModel;
    beforeEach(function () {
        sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        sharedModelMock.tweets = [];
        sharedModelMock.sidebarCollapsed = false;
        sharedModelMock.topbarCollapsed = false;
        sidebarModel = new SidebarModel_1.SidebarModel(sharedModelMock);
    });
    describe("on initialization", function () {
        it("should expose the tweets from the sharedModel passed in the constructor", function () {
            expect(sidebarModel.tweets).toBe(sharedModelMock.tweets);
        });
    });
    describe("on toggleCollapsed()", function () {
        it("should collapse the sidebar", function () {
            sidebarModel.toggleCollapsed();
            expect(sharedModelMock.toggleSidebar).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=SidebarModel.spec.js.map