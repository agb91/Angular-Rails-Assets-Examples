var app = angular.module('second',[])

app.controller("index", function($scope, $compile, splitter) {

    $( window ).resize(function() {
      console.log(window.innerWidth);
      location.reload();
    });
    var w = window.innerWidth;
    var colmax = 6
    if (w<1200)
    {
      colmax = 5;
      if (w<1000)
      {
        colmax = 3;
        if(w<777)
        {
          colmax = 2;
        }
      }
    }
    $scope.cols = 7;
    if($scope.cols>colmax)
    {
      $scope.cols=colmax;
    }
    $scope.oggetti = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    $scope.oggetti = splitter.splitter($scope.oggetti,($scope.cols*2));

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

          scope.check = function(n)
          {
            console.log(n);
            var ris = false
            if(scope.comb[n].length>0)
            {
              ris=true;
            }
            console.log(ris)
            return ris;
          }

          var formatVector = function(v) {
              v = v.substring(1,(v.length-1));
              v = v.split(',');
              v = v.reverse();
              return v;
          };

          scope.comb = []
          scope.oggetti = formatVector(scope.name);
          if(scope.oggetti.length>1)
          {
            scope.comb = splitter.half(scope.oggetti);
          }

        }
    };
});

