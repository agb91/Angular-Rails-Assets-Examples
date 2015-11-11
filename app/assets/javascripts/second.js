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
        scope: {name: '@', cols: '@'},
        link: function(scope, element, attrs) {

          var formatVector = function(v) {
              v = v.substring(1,(v.length-1));
              v = v.split(',');
              v = v.reverse();
              return v;
          };

          var getter = function() {
              var ris = [];
              var max = scope.cols*2;
              for(var i=0;i<max;i++)
              {
                ris.push(parseInt(scope.oggetti.pop()));
              }
              return ris;
          };

          scope.check = function(c) {
            ris = false;
            if (totDim>c)
            {
              ris = true;
            }
            return ris;
          };

          scope.cols;
          scope.oggetti = formatVector(scope.name);
          var totDim = scope.oggetti.length;
          scope.oggetti1 = getter();
          scope.oggetti2 = getter();

        }
    };
});

