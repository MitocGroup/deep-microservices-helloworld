/**
 * Created by AlexanderC on 9/18/15.
 */

'use strict';

import moduleName from '../name';

let deepAsset = DeepFramework.Kernel.container.get('asset');

let routes = {
  'say-hello': {
    url: '/say-hello',
    controller: 'SayHelloController',
    controllerAs: 'say-hello',
    templateUrl: deepAsset.locate('@hello.world.example:js/app/angular/views/hello.html'),
    data: {
      pageTitle: 'Hello World!',
    },
  },
};

class Config {
  constructor($stateProvider, $urlRouterProvider) {
    /* Define application level routes */
    let stateNames = Object.keys(routes);

    angular.forEach(stateNames, function routesRegister(stateName) {
      $stateProvider.state(stateName, routes[stateName]);
    });

    $urlRouterProvider.otherwise(routes['say-hello'].url);
  }
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module(moduleName).config(Config);

export default routes;
