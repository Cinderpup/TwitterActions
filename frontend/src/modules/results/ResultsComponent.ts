import IDirective = angular.IDirective;
import IComponentOptions = angular.IComponentOptions;
export class ResultsComponent implements IComponentOptions {
    public restrict: string = "E";
    public  template: any = "results";
}