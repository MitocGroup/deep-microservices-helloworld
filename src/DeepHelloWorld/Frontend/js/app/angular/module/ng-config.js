'use strict';
'format es6';

import routes from './ng-routes';

export default ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    /* Define application level routes */
    let stateNames = Object.keys(routes);
    angular.forEach(stateNames, function routesRegister(stateName) {
      $stateProvider.state(stateName, routes[stateName]);
    });

    $urlRouterProvider.otherwise(routes['say-hello'].url);
  },
];