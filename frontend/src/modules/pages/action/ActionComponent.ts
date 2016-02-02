import IDirective = angular.IDirective;
export class ActionsComponent implements IDirective {
    public restrict: string = "E";
    public template: any = "actions";
}