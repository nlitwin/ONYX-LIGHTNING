'use strict';

angular.module('onyxLightningApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as vm',
        resolve: {
          ResolvedThings: ResolvedThings
        }
      });

      //////////////

      function ResolvedThings(MainFactory){
        return MainFactory.get()
          .then(function (response){
            console.log(response)
              return response.data;
          });
      }
  });
