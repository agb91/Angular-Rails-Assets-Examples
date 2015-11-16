var app = angular.module('third',[])

app.controller("index", function($scope, $compile) {

});

app.directive("hcimg", function() {
    return {
        restrict: 'EAC',
        templateUrl: "/third/hcimg.html",
        replace: false,
        scope: {im: '@', l: '@',},
        link: function(scope, element, attrs) {

          scope.check = function(n)
          {
           //todo
          }

        }
    };
});

app.directive("hch1", function() {
    return {
        restrict: 'EAC',
        templateUrl: "/third/hch1.html",
        replace: false,
        scope: {txt: '@'},
        link: function(scope, element, attrs) {

          scope.check = function(n)
          {
           //todo
          }

        }
    };
});

app.directive("hch2", function() {
    return {
        restrict: 'EAC',
        templateUrl: "/third/hch2.html",
        replace: false,
        scope: {txt: '@'},
        link: function(scope, element, attrs) {

          scope.check = function(n)
          {
           //todo
          }

        }
    };
});


