import "angular";
import IComponentOptions = angular.IComponentOptions;
import {IActionModel} from "../../model/IActionModel";
export class SidebarComponent implements IComponentOptions {
    public restrict: string = "E";
    public bindings: any = {
        actions: "<"
    };
    public template: string = `
        <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
            <li ng-class="{active:$first}" ng-repeat="action in $ctrl.actions"><a href="#">{{::action}}</a></li>
            </ul>
            </ul>
        </div>`;
}