
describe('LoginApplication', () => {

    //We need to init the app before we can do anything
    beforeEach(module('myLoginApp'));

    //Setup all controllers that we might need, these are global vars for the whole tests
    var $controller, $rootScope;

    //Inject all controllers and $rootScope to be used
    beforeEach(inject(function(_$controller_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    //Basic email validation tests
    describe('Login Form Validation', function() {

        //These are global vars for just this test
        var $scope, controller;

        //Inject scope and controller into each test
        beforeEach(inject(function(){
            $scope = $rootScope.$new();
            controller = $controller('loginController', { $scope: $scope });
		}));

        //Test that valid email addresses return true
        it('Tests a valid email address', function() {
			expect($scope.validateEmail('AValidAddress@somewhere.com'))
         		.toBe(true);

		});

		//Test that invalid email addresses return false
        it('Tests an invalid email address', function() {
			expect($scope.validateEmail('badEmail'))
         		.toBe(false);

		});
    });

});



