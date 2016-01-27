(function() {
  'use strict';

  angular.module('pages')

  .directive('articlesPage', articlesPage);

  function articlesPage() {
    return {
      templateUrl: 'pages/articles/articles-tpl.html'
    }
  }
})();
