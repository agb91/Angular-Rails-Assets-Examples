var app = angular.module('second', [])
app.controller('index', ['$scope', '$http' ,function($scope, $http) {

    $scope.oggetti = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

}]);

app.directive('block', function() {
    return {
        restrict: 'EAC',
        templateUrl: "/second/block.html",
        replace: false,
        scope: {name: '@', cols: '@'},
        link: function(scope, element, attrs) {

            var cols = scope.cols;

            var formatVector = function(v) {
                v = v.substring(1,(v.length-1));
                v = v.split(',');
                v = v.reverse();
                return v;
            };

            var getter = function()
            {
                var ris = [];
                var max = cols;
                if(scope.name.length<max)
                {
                  max = scope.name.length;
                }
                for(var i=0;i<max;i++)
                {
                  ris.push(scope.name.pop());
                }
                return ris;
            }

            scope.name = formatVector(scope.name)
            var p = 0;
            scope.comb = [];
            do
            {
                scope.comb[p] = getter();
                p++;
            }while(scope.name.length>0)

        }
    };
});


app.directive('honeyComb', function() {

    return {
        restrict: 'EAC',
        templateUrl: "/second/honeycomb.html",
        replace: false,
        scope: {name: '@'},
        link: function(scope, element, attrs) {
          scope.oggetti1 = [1,2,3,4,5,6,7];
          scope.oggetti2 = [8,9,10,11,12,13,14];
          scope.cols = 3;
        }
    };
});
