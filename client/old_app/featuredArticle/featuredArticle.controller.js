;(function(){
  'use strict';

  angular
    .module('onyxLightningApp')
    .controller('FeaturedArticleCtrl', FeaturedArticleCtrl);

  // Injection for minification
  FeaturedArticleCtrl.$inject = ['$scope'];

  // Controller 
  function FeaturedArticleCtrl($scope) {

    // FAKE DATA FOR DISPLAY PURPOSES ONLY
    // TODO: Pull data from server or mongodb
    var $div = $('<div class="container">');
    var $title = $('<h1>Very War and So Sadness in Novalia</h1>');
    var $p = $('<p>Someplace, Novalia (AP) — Novalia\'s prime minister laid ' +
              'out a three-year government agenda Tuesday that includes returning t' +
              'he countrys books to surplus, conducting a vote on whether to change ' +
              'the nations flag, and tightening the rules on terrorist fighters</p>');
    var $link = $('<a href="http://news.yahoo.com/zealand-government-agenda-surplus-flag' +
                '-vote-004407251.html"></a>');
    var $img = $('<img src="http://l3.yimg.com/bt/api/res/1.2/qiFXOUcS0gRrVK0n1FmoCA--/YXB' +
                  'waWQ9eW5ld3M7Zmk9ZmlsbDtoPTg2O3E9NzU7dz0xMzA-/http://media.zenfs.com/e' +
                  'n_us/News/ap_webfeeds/f966317c66d41a29630f6a706700023f.jpg" width="130"' +
                  ' height="86" align="left" title="FILE - In this Feb. 7, 2014 file photo,' +
                  ' New Zealand Prime Minister John Key smiles" border="0" />');
    $p.prepend($img);
    $p.prepend($link);
    $div.append($title);
    $div.append($p);
    $('#featuredArticle').html($div);
  }

}).call(this);
