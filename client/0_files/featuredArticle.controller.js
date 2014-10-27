;(function(){
  'use strict';


  angular
    .module('onyxLightningApp')
    .controller('ArticleCtrl', ArticleCtrl);

  ArticleCtrl.$inject = ['$scope', '$stateParams'];

  function ArticleCtrl($scope, $stateParams) {
    $scope.index = $stateParams.index || 0;
  }

}).call(this);
