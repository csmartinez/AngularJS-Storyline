ghostStory.factory('PlayerFactory', function PlayerFactory() {
  var factory = {};
  factory.player = { points: 0 }

  factory.loseFive = function() {
    factory.player.points = (factory.player.points - 5);
  };
  return factory;
});
