;(function(){
  'use strict';

  angular
    .module('onyxLightningApp')
    .controller('FeaturedArticleCtrl', FeaturedArticleCtrl);

  // Injection for minification
  FeaturedArticleCtrl.$inject = ['$scope'];

  // Controller 
  function FeaturedArticleCtrl($scope) {
    var testElement = $('<h3>I go where the article should go</h3>');
    $('#featuredArticle').html(testElement);
  }

}).call(this);
