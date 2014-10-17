'use strict';

angular.module('onyxLightningApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('map', {
        url: '/',
        templateUrl: 'app/map/map.html',
        controller: 'MapCtrl as vm'
      });
  });
