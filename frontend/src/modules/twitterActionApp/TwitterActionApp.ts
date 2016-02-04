import "angular"
import IComponentOptions = angular.IComponentOptions;
export class TwitterActionApp implements IComponentOptions {
    public restrict: string = "E";
    public template: string = `
            <header></header>
            <main></main>
    `;
}