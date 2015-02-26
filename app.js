var ghostStory = angular.module('ghostStory', ['ui.router']);

ghostStory.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('forest', {
  url: "/forest",
  templateUrl: "partials/forest.html",
  controller: "PlayerCtrl"
  });

  $stateProvider.state('gasStation', {
    url: "/gasStation",
    templateUrl: "partials/gasStation.html"
  });

  $stateProvider.state('theWoods', {
    url: "/theWoods",
    templateUrl: "partials/theWoods.html"
  });
});
