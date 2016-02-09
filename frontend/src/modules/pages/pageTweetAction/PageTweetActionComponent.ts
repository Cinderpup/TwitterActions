import "angular"
import IComponentOptions = angular.IComponentOptions;
import {IActionModel} from "../../../model/IActionModel";
export class PageTweetActionComponent implements IComponentOptions {
    public restrict: string = "E";
    public template: any = `
    <div class="container-fluid">
        <div class="row">

            <sidebar actions="$ctrl.actionModel.actions"></sidebar>
            <content></content>

        </div>
    </div>
        `;
    public controller: Function = PageTweetActionController;
}

class PageTweetActionController {
    public static $inject: Array<string> = ["IActionModel"];

    constructor(private actionModel: IActionModel) {
        actionModel.getActions();
    }
}