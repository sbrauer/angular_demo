var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider) {
  $routeProvider.when('/srp/:zip?', {
      controller: 'SrpController',
      templateUrl: 'partials/srp.html'
  }).when('/pdp/:listingid', {
      controller: 'PdpController',
      templateUrl: 'partials/pdp.html'
  }).otherwise({ redirectTo: '/srp' });
});

var controllers = {};
controllers.SrpController = function ($scope, $routeParams, $location, srpFactory) {
  $scope.zipChanged = function() {
    var zip = $scope.zip;
    if(zip.length == 5) {
      $location.path("srp/"+zip);
    } else {
      $scope.result = null;
    }
  };

  $scope.zip = $routeParams.zip || "";
  $scope.busy = false;
  $scope.result = null;
  if($scope.zip.length == 5) {
    $scope.busy = true;
    srpFactory.getListings($scope.zip).success(function(data) {
      $scope.result = data;
      $scope.busy = false;
    });
  }
};

controllers.PdpController = function ($scope, $routeParams, pdpFactory) {
  $scope.busy = true;
  pdpFactory.getListing($routeParams.listingid).success(function(data) {
    $scope.listing = data;
    $scope.busy = false;
  });
};
demoApp.controller(controllers);

demoApp.factory('srpFactory', function($http) {
  return {
    getListings: function(zip) {
      var url = "/mobile/search?query="+zip;
      return $http.get(url, {cache: true});
    }
  };
});

demoApp.factory('pdpFactory', function($http) {
  return {
    getListing: function(id) {
      var url = "/mobile/show/"+id;
      return $http.get(url, {cache: true});
    }
  };
});
