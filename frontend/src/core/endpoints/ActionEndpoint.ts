import IPromise = angular.IPromise;
import IHttpService = angular.IHttpService;
export class ActionEndpoint {

    public static $inject: Array<string> = ["$http"];

    constructor(public $http: IHttpService) {
    }

    public getActions(): IPromise<string> {
        return this.$http({
            method: "GET", url : "http://localhost:8081/actions"
        });
    }
}