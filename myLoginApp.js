
var app = angular.module("myLoginApp", []);
app.controller("loginController", ['$scope', function($scope){
   	$scope.test = "Anuglar is Working";
	// Set Global vars here
    $scope.input = {
       	user: '',
		email: ''
    };
	$scope.userRequiredMessage = true;
	$scope.emailRequiredMessage = true;
    $scope.validEmail = true;


    var validateEmail = function(value) {
        if (value.indexOf("@") > -1) {
            return true;
        }else{
            return false;
        }
    }



	$scope.verifyInputs = function() {
		if ($scope.input.user.length == 0) {
			$scope.userRequiredMessage = false;
		}

		if ($scope.input.email.length == 0) {
			$scope.userRequiredMessage = false;
		}

        if (validateEmail($scope.input.email) == false) {
            $scope.validEmail = false;
            alert("Email address is not valid. Please use a valid email address");
        }

    }


}]);
