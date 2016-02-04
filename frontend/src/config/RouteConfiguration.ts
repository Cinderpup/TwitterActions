import "angular";
import IRouteProvider = angular.route.IRouteProvider;
routeConfiguration.$inject = ["$routeProvider"];
export function routeConfiguration($routeProvider: IRouteProvider): void {
    $routeProvider.when("/", {
        template: `<page-tweet-actions></page-tweet-actions>`
    });
}