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
});
