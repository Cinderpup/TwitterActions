import {ActionEndpoint} from "./ActionEndpoint";
describe("endpoint: ActionEndpoint", () => {

    let $httpMock;

    beforeEach(() => {
        $httpMock = jasmine.createSpy("$http", ["getActions"]);
    });

    describe("when calling the getAction methods", () => {
        it("should fetch the actions", () => {
            let actionEndpoint: ActionEndpoint = new ActionEndpoint($httpMock);
            actionEndpoint.getActions();
            expect($httpMock).toHaveBeenCalled();
        });
    });

});