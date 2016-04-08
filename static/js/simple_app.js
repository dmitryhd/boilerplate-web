angular.module('simpleApp', [])
    .controller('SimpleCtrl', function($scope) {
        $scope.someVar = 100;
        $scope.fn = function() {
            return $scope.someVar;
        }
    });