(function() {
  'use strict';

  angular.module('app', [
    'ui.router',

    'components',
    'pages'
  ]);
})();


;/////////////////////////////////////

(function() {
  'use strict';

  angular.module('app')

  .config(AppConfig);

  AppConfig.$inject = [
    '$stateProvider', 
    '$urlRouterProvider',
    '$locationProvider'
  ];

  function AppConfig(
    $stateProvider, 
    $urlRouterProvider,
    $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      template: '<articles-page></articles-page>'
    });

    $locationProvider.html5Mode(true);

  }
})();


;/////////////////////////////////////

(function() {
  'use strict';

  angular.module('app')

  .controller('AppController', AppController);

  AppController.$inject = ['$scope'];

  function AppController($scope) {
    
  }
})();

;/////////////////////////////////////

(function() {
  'use strict';

  angular.module('components', []);
})();


;/////////////////////////////////////

(function() {
  'use strict';

  angular.module('pages', []);
})();


;/////////////////////////////////////

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


;/////////////////////////////////////

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


;/////////////////////////////////////

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
