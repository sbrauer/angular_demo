var demoApp = angular.module('demoApp', []);
var controllers = {};
controllers.SimpleController = function ($scope) {
  $scope.items = [
    { name: 'Pulp Fiction', director: 'Tarantino'},
    { name: 'Jackie Brown', director: 'Tarantino'},
    { name: 'Shining, The', director: 'Kubrick'},
    { name: '2001', director: 'Kubrick'},
    { name: 'Full Metal Jacket', director: 'Kubrick'},
  ];
};
// Could add more controllers as named properties of the "controllers" object.
// Finally register controllers with module.
demoApp.controller(controllers);
