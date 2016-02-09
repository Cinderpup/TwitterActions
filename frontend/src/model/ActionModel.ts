import {IActionModel} from "./IActionModel";
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {IActionEndpoint} from "../core/endpoints/IActionEndpoint";
import * as _ from "lodash";
export class ActionModel implements IActionModel {
    public static $inject: Array<string> = ["IActionEndpoint"];
    public actions: Array<string> = [];

    constructor(private actionEndpoint: IActionEndpoint) {
    }

    public getActions(): void {
        this.actionEndpoint.getActions().then(
            (result: IHttpPromiseCallbackArg<Array<string>>) => {
                this.actions.length = 0;
                _.forEach(result.data, (action: string) => {
                    this.actions.push(action);
                });
            }
        );
    }

}