import IDirective = angular.IDirective;
export class ResultsComponent implements IDirective {

    public restrict: string = "E";
    public  template: any = "results";
}