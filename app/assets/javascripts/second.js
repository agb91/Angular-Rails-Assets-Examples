var app = angular.module('second', [])
app.controller('index', ['$scope', '$http' ,function($scope, $http) {

    $scope.oggetti = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

}]);

app.directive('honeyComb', function() {

    return {
        restrict: 'EAC',
        templateUrl: "/second/honeycomb.html",
        replace: false,
        scope: {name: '@'},
        link: function(scope, element, attrs) {

            var formatVector = function(v) {
                v = v.substring(1,(l-1));
                v = v.split(',');
                v = v.reverse();
                return v;
            };

            var getSeven = function()
            {
                var ris = [];
                var max = 7;
                if(scope.name.length<7)
                {
                  max = scope.name.length;
                }
                for(var i=0;i<max;i++)
                {
                  ris.push(scope.name.pop());
                }
                return ris;
            }

            var l = scope.name.length;
            scope.name = formatVector(scope.name)
            var p = 0;
            scope.comb = [];
            do
            {
                scope.comb[p] = getSeven();
                p++;
                l = l-7;
            }while(l>6)
        }
    };
});
