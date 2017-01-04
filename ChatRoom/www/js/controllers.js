angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

  // playing with account controller
.controller('AccountCtrl', function($scope) {
  // toggle friend
  $scope.settings = {
    enableFriends: true
  };

  // adding fixed list to test ionList and ionItem
  $scope.list = [
    { id: 1, title: 'Titre 1' },
    { id: 2, title: 'Titre 2' },
    { id: 3, title: 'Titre 3' },
    { id: 4, title: 'Titre 4' },
    { id: 5, title: 'Titre 5' },
    { id: 6, title: 'Titre 6' },
    { id: 7, title: 'Titre 7' }
  ];
});
