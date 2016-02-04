import "angular"
import IComponentOptions = angular.IComponentOptions;
export class PageTweetActionComponent implements IComponentOptions {
    public restrict: string = "E";
    public template: any = `
    <div class="container-fluid">
        <div class="row">

            <sidebar></sidebar>
            <content></content>

        </div>
    </div>
        `;
}