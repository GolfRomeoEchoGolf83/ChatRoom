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
.controller('AccountCtrl', function($scope, $ionicModal) {
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

  // creating account view
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  })
    .then(function(modal) {
    $scope.loginModal = modal;
  });
})

  .controller('TestCtrl', function($scope, $ionicPopup) {
    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
      $scope.data = {};

      // popup perso
      var myPopup = $ionicPopup.show({
        template: '<input type="password" ng-model="data.wifi">',
        title: 'Saisir le mot de passe Wi-Fi',
        scope: $scope,
        buttons: [
          { text: 'Annuler' },
          {
            text: '<b>Enregistrer</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.wifi) {
                //ne pas autoriser la fermeture si le mot de passe n'est pas saisi
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          }
        ]
      });

      myPopup.then(function(res) {
        console.log('Saisi!', res);
      });

      $timeout(function() {
        myPopup.close(); //fermeture de la popup après 3 secondes
      }, 3000);
    };

    // popup de confirmations
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Partir',
        template: 'Etes-vous sûr de vouloir partir ?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('Vous êtes sûr');
        } else {
          console.log('Vous n\'êtes pas sûr');
        }
      });
    };

    // popup d'alerte
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Ne faites pas ça!',
        template: 'C\'est mieux ainsi'
      });

      alertPopup.then(function(res) {
        console.log('Merci de ne pas avoir mangé ce cône glacé!');
      });
    };

    // print out platform info
    $scope.info = {
      platform: ionic.Platform.platform(),
      version: ionic.Platform.version()
    };
});


