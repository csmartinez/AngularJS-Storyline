ghostStory.controller('PlayerCtrl', function PlayerCtrl($scope, $state, PlayerFactory) {
  $scope.player = PlayerFactory.player;
  $scope.PlayerFactory = PlayerFactory;

  $scope.crowbarScenario = false;
  $scope.flashlightScenario = false;
  $scope.flaregunScenario = false;

  // $scope.gasStationCrowbar = false;
  // $scope.gasStationFlareGun = false;
  // $scope.theWoodsCrowbar = false;
  // $scope.theWoodsFlareGun = false;


  $scope.chooseScenario = function() {
    if ($scope.player.items === "crowbar") {
      $scope.crowbarScenario = true;
    } else if ($scope.player.items === "flashlight") {
      $scope.flashlightScenario = true;
      PlayerFactory.loseFive();
    } else {
      $scope.flaregunScenario = true;
      PlayerFactory.loseFive();
    }
  };

});
