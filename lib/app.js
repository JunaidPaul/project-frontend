var gitlabApp = angular.module('gitlabApp', [
  'ngRoute',
  'gitlabController'
]);

gitlabApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
      }).
      when('/validate', {
        templateUrl: './views/validate.html',
        controller: 'homeCtrl'
      }).
      when('/results', {
        templateUrl: './views/results.html',
        controller: 'homeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
