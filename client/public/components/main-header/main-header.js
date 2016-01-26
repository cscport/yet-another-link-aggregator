(function() {
  'use strict';

  angular.module('components')

  .directive('mainHeader', mainHeader);

  function mainHeader() {
    return {
      template: 'header'
    }
  }
})();
