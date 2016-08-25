angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http, Chats) {
     $http.get('/js/content.json').success(function(response) {
       $scope.cities = response;
    });
})

.controller('ChatDetailCtrl', function($scope, $http, $stateParams) {
    var cityId = $stateParams.chatId;
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?id='+cityId+'&appid=86af51820770851b6dd1cee05fa30894&mode=json&units=imperial';
    var forcastUrl = 'http://api.openweathermap.org/data/2.5/forecast?id='+cityId+'&appid=86af51820770851b6dd1cee05fa30894&mode=json&units=imperial';
    $http.get(weatherUrl).success(function(response) {
      $scope.city = response;
    });

    $http.get(forcastUrl).success(function(response) {
      $scope.forcastData = response;
    });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
