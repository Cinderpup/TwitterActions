import "angular"
import IComponentOptions = angular.IComponentOptions;
export class MainComponent implements IComponentOptions {
    public restrict: string = "E";
    public template: string = `
    <ng-view></ng-view>
    `;
}