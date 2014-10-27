;(function(){
  'use strict';


  angular
    .module('onyxLightningApp')
    .controller('MainCtrl', MainCtrl)

  MainCtrl.$inject = ['$scope', 'MainFactory', '$stateParams', '$state'];

  function MainCtrl($scope, MainFactory, $stateParams, $state) {
    $scope.index = $stateParams.index || 0;
    console.log($scope.index, "FROM THE MAIN CONTR FUNC")
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
  angular
    .module('onyxLightningApp').directive('ngEnter', function ($stateParams, $state) {
      return function ($scope, element, attrs) {

        var params={
          37:add,
          38:add,
          39:minus,
          40:minus,
          // 13:clickThough
        }


          element.bind("keydown keypress", function (event) {
              console.log(event.which)
              if(event.which === 13) {
                  $scope.$apply(function (){
                      $scope.$eval(attrs.ngEnter);
                  });
                  event.preventDefault();
                  $scope.index+=1
                  console.log($scope.index, 'FROM NG ENTERRR')
                  // MainCtrl()
                  $state.go('main.article',  {index: params[event.which]($stateParams.id)})
                  
              }
          });
        function add(num){
          return num+1;
        }
        function minus(num){
          return num-1;
        }
      };

    });

}).call(this);
