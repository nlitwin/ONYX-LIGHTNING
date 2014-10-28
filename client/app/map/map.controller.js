
;(function(){
  'use strict';


  angular
    .module('onyxLightningApp')
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['$scope', 'MapFactory'];

  function MapCtrl($scope, MapFactory) {
    $scope.zoomToCountry = MapFactory.zoomToCountry;
  }
}).call(this);
