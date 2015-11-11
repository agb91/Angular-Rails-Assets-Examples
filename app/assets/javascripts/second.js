alert('vedo il file second.js');

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
                v = v.substring(1,(v.length-1));
                v = v.split(',');
                v = v.reverse();
                return v;
            };

            var getTwelve = function()
            {
                scope.name.pop();
                var ris = [];
                var max = 12;
                if(scope.name.length<12)
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
                scope.comb[p] = getTwelve();
                p++;
            }while(scope.name.length>0)

        }
    };
});
