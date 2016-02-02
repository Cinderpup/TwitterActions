import "angular";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";
import {ActionsComponent} from "./modules/pages/action/ActionComponent";
import {ResultsComponent} from "./modules/pages/results/ResultsComponent";

angular.module("app", [])
    .directive("actions", () => new ActionsComponent())
    .directive("results", () => new ResultsComponent());
angular.bootstrap(document, ["app"], {
    strictDi: true
});