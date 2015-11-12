var app = angular.module('second',[])

app.controller("index", function($scope, splitter) {

    $scope.oggetti = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.oggetti = splitter.splitter($scope.oggetti,5);

});

app.service("splitter", function() {
        this.splitter = function(v,c)
        {
          v = v.reverse();
          var ris = []
          var tot = v.length;
          for (var i=0; i<tot; i=i+c)
          {
            nuovo = getter(v,c);
            ris.push(nuovo)
          }
          return ris
        };

        this.half = function(v)
        {
          var ris1 = [];
          var ris2 = [];
          var risTot = []
          var l = v.length;
          for (var i = 0; i<l; i++)
          {
            if(i<(l/2))
            {
              ris1.push(v.pop());
            }
            else
            {
              ris2.push(v.pop());
            }
          }
          risTot = [ris1,ris2];
          return risTot;
        };

        var getter = function(v,c)
        {
          var r = []
          for(var i=0; i<c; i++)
          {
            if(v.length>0)
            {
              r.push(v.pop());
            }
          }
          return r;
        }
    });

app.directive("honeyComb", function(splitter) {
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

          scope.oggetti = formatVector(scope.name);
          scope.comb = splitter.half(scope.oggetti);
        }
    };
});

