var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
      controller: 'SimpleController',
      templateUrl: 'partials/view1.html'
  }).when('/view2', {
      controller: 'SimpleController',
      templateUrl: 'partials/view2.html'
  }).otherwise({ redirectTo: '/' });
});

var controllers = {};
controllers.SimpleController = function ($scope) {
  $scope.films = [
    { name: 'Pulp Fiction', director: 'Tarantino'},
    { name: 'Jackie Brown', director: 'Tarantino'},
    { name: 'Shining, The', director: 'Kubrick'},
    { name: '2001', director: 'Kubrick'},
    { name: 'Full Metal Jacket', director: 'Kubrick'},
  ];

  $scope.addFilm = function() {
    $scope.films.push({
      name: $scope.newFilm.name,
      director: $scope.newFilm.director
    });
  };
};
demoApp.controller(controllers);
