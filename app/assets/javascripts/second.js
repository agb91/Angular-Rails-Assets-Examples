var app = angular.module('second', [])
app.directive('honeyComb', function() {

    return {
        restrict: 'EAC',
        templateUrl: "/second/honeycomb.html",
        replace: false,
        scope: true,
        link: function(scope, element, attrs) {
            scope.oggetti1 = [1,2,3,4,5,6,7];
            scope.oggetti2 = [9,10,11,12,13,14];
        }
    };
});
