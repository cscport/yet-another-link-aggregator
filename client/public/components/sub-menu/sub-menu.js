(function() {
  'use strict';

  angular.module('components')

  .directive('subMenu', subMenu);

  function subMenu() {
    return {
      template: [
        '<div class="row">',
        '  <div class="small-12 columns">',
        '    sub menu here.',
        '  </div>',
        '</div>',
      ].join('')
    }
  }
})();
