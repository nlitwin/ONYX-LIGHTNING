;(function(){
  'use strict';


  angular
    .module('onyxLightningApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'MainFactory', '$stateParams', '$state'];

  function MainCtrl($scope, MainFactory, $stateParams, $state) {
    $scope.index = $stateParams.index || 0;
    $state.go('main.article');
    $scope.expandedSwitch = false;
    MainFactory.get().
      success(function(data, status, headers, config) {
        $scope.news = data;
      }).
      error(function(data, status, headers, config) {
        // console.log(data);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
}).call(this);
