;(function(){
  'use strict';

  angular
    .module('onyxLightningApp')
    .factory('MainFactory', MainFactory);

  MainFactory.$inject = ['$http'];
  function MainFactory($http) {

    var instance = {
      get:get,
      create:create,
      remove: remove
    }
    return instance;

    ////////////////////

    function get(){
      return $http.get('/api/news');
    }
    function create(thing){
      return $http.post('/api/news', { name: $scope.newThing });
    }
    function remove(id) {
      return $http.delete('/api/news/' + id);
    }
  }

}).call(this);
