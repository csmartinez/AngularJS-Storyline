ghostStory.controller('PlayerCtrl', function PlayerCtrl($scope, PlayersFactory) {
  $scope.players = PlayersFactory.player;
  $scope.PlayersFactory = PlayersFactory;
  $scope.crowbarScenario = false;
  $scope.flashlightScenario = false;
  $scope.flaregunScenario = false;

  $scope.chooseScenario = function() {
    PlayersFactory.addPlayer();
    if ($scope.players[0].gear === "crowbar") {
      $scope.crowbarScenario = true;
    } else if ($scope.players[0].gear === "flashlight") {
      $scope.flashlightScenario = true;
      PlayersFactory.loseFive();
    } else {
      $scope.flaregunScenario = true;
      PlayersFactory.loseFive();
    }
  };

});
