var app = angular.module('index', [])
app.controller('indexController', ['$scope', '$http' ,function($scope, $http) {

    $scope.latoDestro = "Scritta originale";
    $scope.lettura = "vuota";
    $scope.trovato = "niente";
    $scope.query = "nothing";
    $scope.serverRead = "";
    $scope.parent = "noone";
    $scope.risultato = [];

    $scope.cliccato = function () {
        alert('clic');
        $scope.latoDestro = "Scritta Cambiata";
    }

    $scope.search = function()
    {
        alert($scope.query);
        for(var i=0;i<$scope.lettura.length;i++) {
            if($scope.lettura[i].nome==$scope.query)
            {
              $scope.risultato.push($scope.lettura[i]);
            }
        }
    }

    $scope.sendDataToRails = function()
    {
        $http.post("/altro/index", {nome: $scope.query2})
        .success(function(data, status, headers, config) {
            alert("post effettuato");
            jsonReader("/altro/index.json","serverRead");
        })
        .error(function() {
            alert("Si è verificato un errore!");
        });
    }

    var jsonReader = function(url, oggetto)
    {
        var datas = "";
        $http.get(url)
        .success(function(data, status, headers, config) {
          if (oggetto == 'lettoreTest')
          {
             $scope.lettura = data.home;
          }
          if (oggetto == 'serverRead')
          {
            console.log(data)
            alert(data);
            $scope.serverRead = data;
          }
        })
        .error(function(error, status, headers, config) {
             alert(status + "Error occured");
        });

    }

    $scope.lettoreTest = function () {
        jsonReader('/home/index.json', 'lettoreTest');
    }

    $scope.getSons = function ()
    {
        $scope.sons = [];
        var f1 = $scope.parent.figlio1;
        var f2 = $scope.parent.figlio2;
        $scope.sons.push(searchByIde(f1));
        $scope.sons.push(searchByIde(f2));
    }

    var searchByIde = function (ago)
    {
        var ris;
        for(var i=0;i<$scope.lettura.length;i++) {
            if($scope.lettura[i].ide==ago)
            {
                ris = $scope.lettura[i];
            }
        }
        return ris;
    }

}])

app.directive("clientSideSearch", function() {
    return {
        restrict: "EAC",
        templateUrl: "/home/clientSideSearch.html",
    };
});
app.directive("serverSideSearch", function() {
    return {
        restrict: "EAC",
        templateUrl: "/home/serverSideSearch.html",
    };
});
app.directive("elencator", function()
{
    return {
        restrict: "EAC",
        templateUrl: "/home/elencator.html",
    };
});
app.directive("getEredi", function()
{
    return {
        restrict: "EAC",
        templateUrl: "/home/getEredi.html",
    };
});