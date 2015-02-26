ghostStory.factory('PlayersFactory', function PlayersFactory() {
  var factory = {};
  factory.player = [];
  factory.items = "";
  factory.scenario = ""

  factory.addPlayer = function() {
    if (factory.player.length === 0) {
      factory.player.push({ name: factory.playerName, gear: factory.items, scenario: factory.scenario, points: 100 });
    };
  };

  factory.loseFive = function() {
    factory.player[0].points = (factory.player[0].points - 5);
  };
  return factory;
});
