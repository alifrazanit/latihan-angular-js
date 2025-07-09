describe('PhoneListController', () => {
    beforeEach(module('phonecatApp'));
    it('should create a phones model with 3 phones', inject(($controller)=> {
        var scope = {};
        var ctrl = $controller('PhoneListController', {
            $scope: scope
        });
        expect(scope.phones.length).toBe(3);
    }))
})