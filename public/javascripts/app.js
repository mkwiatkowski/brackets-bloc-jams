blocJams = angular.module('BlocJams', ['ui.router']);

blocJams.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: 'templates/landing.html'
  });
  
  $stateProvider.state('song', {
     url: '/song',
     controller: 'Song.controller',
     templateUrl: 'templates/song.html'
  });
}]);
 
// This is a cleaner way to call the controller than crowding it on the module definition.
blocJams.controller('Landing.controller', ['$scope', function($scope) {
  
  var shuffle = function(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  
  $scope.title = "Bloc Jams";

  $scope.subText = "Turn the music up!";
    $scope.subTextClicked = function() {
      $scope.subText += '!';
    };

  $scope.albumURLs = [
    'images/album-placeholders/album-1.jpg',
    'images/album-placeholders/album-2.jpg',
    'images/album-placeholders/album-3.jpg',
    'images/album-placeholders/album-4.jpg',
    'images/album-placeholders/album-5.jpg',
    'images/album-placeholders/album-6.jpg',
    'images/album-placeholders/album-7.jpg',
    'images/album-placeholders/album-8.jpg',
    'images/album-placeholders/album-9.jpg',
  ];

  $scope.titleClicked = function() {
    $scope.albumURLs = shuffle($scope.albumURLs);
  };
   
}]);

blocJams.controller('Song.controller', ['$scope', function($scope) {
}]);
