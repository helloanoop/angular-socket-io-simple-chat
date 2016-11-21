'use strict';

angular.module('app', [])
.controller('AppCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

  var socket = io();

  $scope.msg = '';

  $scope.submit = function(){
    var date = new Date();

    socket.emit('chat:message', {
      message : $scope.msg,
      timestamp : date.toLocaleString()
    });

    $scope.msg = '';
  };

  $scope.messages = [];

  socket.on('chat:message', function(msg){
    $scope.messages.push(msg);
    $scope.$apply();
  });

}]);