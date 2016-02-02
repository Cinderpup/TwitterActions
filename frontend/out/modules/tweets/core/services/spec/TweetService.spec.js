var TweetService_1 = require("../impl/TweetService");
var _ = require("lodash");
describe("Service: TweetService", function () {
    var tweetService;
    beforeEach(function () {
        tweetService = new TweetService_1.TweetService();
    });
    describe("on getAll()", function () {
        it("should return 5 tweets", function () {
            var res = tweetService.getAll();
            expect(res.length).toBe(5);
            _.forEach(res, function (tweet) {
                expect(tweet.constructor.name).toEqual("Tweet");
            });
        });
    });
});
//# sourceMappingURL=TweetService.spec.js.map