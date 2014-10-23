'use strict';

angular.module('onyxLightningApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: 'app/main/main.html'
          },
          'map': {
            templateUrl: 'app/map/map.html',
            controller: 'MapCtrl'
          },
        },
        controller: 'MainCtrl'
      })
      .state('main.article', {
        url: ':index',
        templateUrl: 'app/featuredArticle/featuredArticle.html',
        controller: 'ArticleCtrl'
      })



  });
