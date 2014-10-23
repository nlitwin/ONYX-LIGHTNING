;(function(){
  'use strict';


  angular
    .module('onyxLightningApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['ResolvedThings', '$scope', 'MainFactory'];

  function MainCtrl(ResolvedThings, $scope, MainFactory) {
    console.log(ResolvedThings);
    console.log('fooo');

    var vm = this;
    vm.awesomeThings = ResolvedThings;
    vm.main = MainFactory;
    vm.remove = remove;

    ////////////////////

    function addThing() {
      if(vm.newThing === '') {
        return;
      }
      vm.newThing = '';
    }

    function remove(id) {
      vm.main.remove(id)
        .then(function(){

          var index = _.indexOf(vm.awesomeThings, {_id: id})
          vm.awesomeThings.splice(index, 1);

        })
    }
  }

}).call(this);
