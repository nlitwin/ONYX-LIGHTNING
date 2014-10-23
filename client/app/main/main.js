'use strict';

angular.module('onyxLightningApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/:index',
        views: {
          '': {
            templateUrl: 'app/main/main.html'
          },
          'map@main': {
            templateUrl: 'app/map/map.html',
            controller: 'MapCtrl'
          }
        },
        controller: 'MainCtrl'
      });

  });
