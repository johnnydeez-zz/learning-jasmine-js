describe('Some email validation tests', () => {
    var scope, $location, createController;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('loginController', {
                '$scope': scope
            });
        };
    }));

    it('Tests a valid email address', () => {
        console.log( scope.validateEmail('badEmail') );
        //expect(validateEmail('AValidAddress@somewhere.com'))
         //   .toBe(true);
    });
});
