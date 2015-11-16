var app = angular.module('third',[])

app.controller("index", function($scope, $compile) {

  $scope.state = 0;
  var ofleft=0;
  var oftop=0;
  $scope.click = function(id)
  {
    id = "#"+id;
    if ($scope.state==0)
    {
      $scope.state=1;
    }
    else
    {
      $scope.state=0;
      $(document).unbind();
    }
    ofleft=event.pageX;
    oftop=event.pageY;
    if($scope.state==1)
    {
      $(document).bind('mousemove',function(e){
        var x = e.pageX-ofleft;
        var y = e.pageY-oftop;
        if(x<0){
          $(id).css("margin-left",x);
        }
        else
        {
          $(id).css("left", (x));
        }
        $(id).css("margin-top",y);
      });
    }

  }

});

app.directive("hcimg", function() {
    return {
        restrict: 'EAC',
        templateUrl: "/third/hcimg.html",
        replace: false,
        scope: {im: '@', l: '@',},
        link: function(scope, element, attrs) {

          if(scope.l<200)
          {
            document.getElementById("ext").className = "imh2";
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


