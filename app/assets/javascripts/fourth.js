var app = angular.module('fourth',[])

app.controller("index", function($scope, $compile) {

   $scope.testo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis condimentum odio. Cras dignissim, urna nec pulvinar lacinia, nulla augue ornare libero, id porttitor tortor nisi quis lectus. Nunc in justo velit. Mauris sed est congue, viverra leo vel, accumsan neque. Morbi dolor ipsum, condimentum quis dui et, placerat pretium neque. Vivamus fringilla est luctus velit lacinia, in venenatis dui molestie. Aenean imperdiet ultrices dictum. Duis leo magna, eleifend eget semper sed, tincidunt id orci. Sed ornare sagittis fermentum. Ut interdum aliquam pellentesque."+
"Integer nec turpis neque. Morbi justo lectus, eleifend a elit ac, malesuada imperdiet nisi. Aenean venenatis finibus erat, id molestie augue. Maecenas molestie ligula ante, eget consectetur enim vehicula sed. Etiam sit amet augue at mauris blandit tincidunt. Vestibulum eu sollicitudin felis. Sed malesuada aliquet nisi. Duis suscipit, nisi vitae commodo mollis, quam justo congue diam, at faucibus quam nibh a risus."+
"Curabitur in ligula ligula. Maecenas leo nisi, mollis ac ligula sit amet, placerat porta tellus. Nunc auctor dictum justo, eget vestibulum ipsum ultrices nec. Vestibulum quis quam ut mi feugiat facilisis vel ac tellus. Praesent lorem risus, interdum eget tincidunt id, lobortis ut ante. Maecenas cursus pulvinar pulvinar. Aliquam ac massa tempus, venenatis felis ut, eleifend magna. Curabitur tincidunt sit amet nunc ac tincidunt. Phasellus tempor enim vel mollis vulputate. Morbi sollicitudin tellus tristique dui euismod tristique. Nunc sollicitudin nulla diam, in interdum dui pretium vitae. Nulla vel magna neque. Quisque rhoncus nunc dolor, non sollicitudin mauris tristique suscipit. Quisque aliquet efficitur tellus sit amet tempor. Aliquam dictum vel ligula vitae gravida."+
"Quisque scelerisque mi vel volutpat convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dictum a dolor vel congue. Proin semper sem sit amet ligula maximus, quis aliquam augue ultricies. Cras at consequat arcu. Proin luctus odio id maximus malesuada. Duis fermentum in purus vel consequat. Maecenas luctus fermentum arcu, nec suscipit felis efficitur in. Nam tincidunt, libero ac fringilla sagittis, neque sem vestibulum leo, non viverra nulla quam eget velit. Integer fringilla turpis sit amet ultricies euismod." +
"Phasellus quis aliquet diam. Donec ut felis nec justo dictum venenatis. Vestibulum auctor magna in hendrerit gravida. Sed scelerisque odio dui, ut varius velit commodo ut. Pellentesque mi sapien, ultrices vitae mollis eu, mollis pharetra odio. Donec vel consectetur dolor. Curabitur vitae urna ut magna venenatis blandit sed at quam. Nunc eu tortor nunc. Morbi non augue vitae metus dictum tempor ut eget mi. Morbi fringilla scelerisque nunc, eu fermentum augue consequat quis. Donec pulvinar, eros convallis semper suscipit, erat nibh pharetra velit, ut elementum velit tortor quis leo. Vestibulum sit amet porttitor eros, sed hendrerit turpis. Sed aliquet id arcu sed pharetra. Praesent blandit vestibulum sagittis.";

});

app.directive("paragraph", function() {
    return {
        restrict: 'EAC',
        templateUrl: "/fourth/paragraph.html",
        replace: false,
        scope: {text: '@'},
        link: function(scope, element, attrs) {

          scope.starts = [0,0,0,0,0,0,0,0,0,0];
          scope.ends = [0,0,0,0,0,0,0,0,0,0];
          var state=0;
          var state2=0;

          scope.t = []
          for(var i=0; i<10; i++)
          {
            var chunk = scope.text.substring(i*170,(i+1)*170);
            scope.t.push(chunk);
          }


          scope.startLeft = function()
          {
            state=1;
          }

          scope.endLeft = function()
          {
            state=0;
            cut();
          }

          scope.startRight = function()
          {
            state2=1;
          }

          scope.endRight = function()
          {
            state2=0;
            cut();
          }

          var cut = function()
          {
            for(var i=0; i<10; i++)
            {
              if((scope.ends[i]+scope.starts[i])>100)
              {
                $('#'+i).css('color', "#0000ff" );
              }
              if((scope.ends[i]+scope.starts[i])>200)
              {
                $('#'+i).css('color', "#ff9900" );
              }
              if((scope.ends[i]+scope.starts[i])>400)
              {
                $('#'+i).css('color', "#ff0000" );
              }
              if((scope.ends[i]+scope.starts[i])>600)
              {
                $('#'+i).css('color', "#00ff00" );
              }
              $('#'+i).css('margin-left',scope.starts[i]);
              $('#'+i).css('margin-right',scope.ends[i]);
            }
          }

          $(document).bind('mousemove',function(e){
            //escursione: 230 -420
            if(state==1)
            {
              var x = e.pageX;
              var y = e.pageY;
              var radix = Math.round((y-230)/20);
              scope.starts[radix] = x;
            }
            if(state2==1)
            {
              var x = e.pageX;
              var y = e.pageY;
              var radix = Math.round((y-230)/20);
              scope.ends[radix] = (window.innerWidth - x - 200);
            }
          });

        }
    };
});


