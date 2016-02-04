import "angular"
import IComponentOptions = angular.IComponentOptions;
export class HeaderComponent implements IComponentOptions {
    public restrict: string = "E";
    public template: string = `
            <navbar></navbar>`;
}