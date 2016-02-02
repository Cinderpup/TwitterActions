require("angular");
require("angular-route");
var routes_1 = require("./configs/routes");
var PageTweetsComponent_1 = require("./components/pageTweets/PageTweetsComponent");
var TweetContentComponent_1 = require("./components/tweetContent/TweetContentComponent");
var TweetMainComponent_1 = require("./components/tweetMain/TweetMainComponent");
var TweetSidebarComponent_1 = require("./components/tweetSidebar/TweetSidebarComponent");
var TweetTopbarComponent_1 = require("./components/tweetTopbar/TweetTopbarComponent");
var ContentModel_1 = require("../core/models/impl/ContentModel");
var SharedModel_1 = require("../core/models/impl/SharedModel");
var SidebarModel_1 = require("../core/models/impl/SidebarModel");
var TopbarModel_1 = require("../core/models/impl/TopbarModel");
var TweetService_1 = require("../core/services/impl/TweetService");
angular.module("app.tweets", ["ngRoute"])
    .service("IContentModel", ContentModel_1.ContentModel)
    .service("ISharedModel", SharedModel_1.SharedModel)
    .service("ISidebarModel", SidebarModel_1.SidebarModel)
    .service("ITopbarModel", TopbarModel_1.TopbarModel)
    .service("ITweetService", TweetService_1.TweetService)
    .directive("pageTweets", function () { return new PageTweetsComponent_1.PageTweetsComponent(); })
    .directive("tweetContent", function () { return new TweetContentComponent_1.TweetContentComponent(); })
    .directive("tweetMain", function () { return new TweetMainComponent_1.TweetMainComponent(); })
    .directive("tweetSidebar", function () { return new TweetSidebarComponent_1.TweetSidebarComponent(); })
    .directive("tweetTopbar", function () { return new TweetTopbarComponent_1.TweetTopbarComponent(); })
    .config(routes_1.config);
//# sourceMappingURL=index.js.map