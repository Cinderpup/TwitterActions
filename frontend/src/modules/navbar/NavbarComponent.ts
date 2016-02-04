import "angular"
import IComponentOptions = angular.IComponentOptions;
export class NavbarComponent implements IComponentOptions {
    public restrict:string = "E";
    public template:string = require("./NavbarComponent.html");
}