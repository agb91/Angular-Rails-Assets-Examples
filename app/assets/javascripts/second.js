var app = angular.module('second', [])
app.controller('index', ['$scope' , function($scope) {

    $scope.primovet = [1,2,3,4,5,6];
    $scope.secondovet = [7,8,9,10,11,12];
    $scope.oggetti = [$scope.primovet, $scope.secondovet];

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

          var half = function(v) {
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

          scope.oggetti = formatVector(scope.name);
          scope.comb = half(scope.oggetti);
        }
    };
});

