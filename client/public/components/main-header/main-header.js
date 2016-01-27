(function() {
  'use strict';

  angular.module('components')

  .directive('mainHeader', mainHeader);

  function mainHeader() {
    return {
      template: [
        '<div class="row">',
        '  <div class="small-2 columns">',
        '    New Stuff',
        '  </div>',
        '  <div class="small-2 columns">',
        '    Add New',
        '  </div>',
        '  <div class="small-5 columns">',
        '    menu',
        '  </div>',
        '  <div class="small-3 columns">',
        '    sign up',
        '  </div>',
        '</div>'
      ].join('')
    }
  }
})();
