import IPromise = angular.IPromise;
export interface IActionEndpoint {

    getActions(): IPromise<Array<string>>;

}