import "angular";
import "angular-route";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";
import {PageTweetActionComponent} from "./modules/pages/pageTweetAction/PageTweetActionComponent";
import {SidebarComponent} from "./modules/sidebar/SidebarComponent";
import {ContentComponent} from "./modules/content/ContentComponent";
import {NavbarComponent} from "./modules/navbar/NavbarComponent";
import {HeaderComponent} from "./modules/header/HeaderComponent";
import {MainComponent} from "./modules/main/MainComponent";
import {TwitterActionApp} from "./modules/twitterActionApp/TwitterActionApp";
import {routeConfiguration} from "./config/RouteConfiguration";
import {ActionModel} from "./model/ActionModel";
import {ActionEndpoint} from "./core/endpoints/ActionEndpoint";

angular.module("app", ["ngRoute"])
    .component("twitterActionApp", new TwitterActionApp())
    .component("tweetAction", new PageTweetActionComponent())
    .component("sidebar", new SidebarComponent())
    .component("content", new ContentComponent())
    .component("navbar", new NavbarComponent())
    .component("header", new HeaderComponent())
    .component("main", new MainComponent())
    .component("pageTweetActions", new PageTweetActionComponent())
    .service("IActionModel", ActionModel)
    .service("IActionEndpoint", ActionEndpoint)
    .config(routeConfiguration);

angular.bootstrap(document, ["app"], {
    strictDi: true
});