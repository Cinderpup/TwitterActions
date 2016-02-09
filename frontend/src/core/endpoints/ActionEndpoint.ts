import IPromise = angular.IPromise;
import IHttpService = angular.IHttpService;
import {IActionEndpoint} from "./IActionEndpoint";
export class ActionEndpoint implements IActionEndpoint{

    public static $inject: Array<string> = ["$http"];

    constructor(public $http: IHttpService) {
    }

    public getActions(): IPromise<Array<string>> {
        return this.$http({
            method: "GET", url : "http://localhost:8081/actions"
        });
    }
}