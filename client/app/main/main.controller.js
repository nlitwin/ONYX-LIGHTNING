;(function(){
  'use strict';


  angular
    .module('onyxLightningApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'MainFactory', '$stateParams'];

  function MainCtrl($scope, MainFactory, $stateParams) {
    console.log($stateParams);

    $scope.index = $stateParams.index | 0;
    console.log($scope.index);

    MainFactory.get().
      success(function(data, status, headers, config) {
        console.log(data);
        $scope.news = data;
      }).
      error(function(data, status, headers, config) {
        console.log(data);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

  }

}).call(this);
