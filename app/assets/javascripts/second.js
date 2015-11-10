var app = angular.module('second', [])
app.controller('index', ['$scope', '$http' ,function($scope, $http) {

  $scope.oggetti = [2,3,4,5,6,7,8];

}])