import "angular"
import IComponentOptions = angular.IComponentOptions;
export class ContentComponent implements IComponentOptions {
    public restrict: string = "E";
    public template: string = require("./ContentComponent.html");
}