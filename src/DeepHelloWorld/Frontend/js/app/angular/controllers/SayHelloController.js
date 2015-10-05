/**
 * Created by AlexanderC on 9/18/15.
 */

'use strict';

import moduleName from '../name';

export class SayHelloController {
  constructor($scope) {
    // @todo: inject this using ng DI
    this._helloResource = DeepFramework.Kernel.get('resource').get('@hello.world.example:sample');
    this._$scope = $scope;

    this._$scope.catchSubmit = this.catchSubmit.bind(this);
  }

  catchSubmit() {
    let payload = {
      Name: this._$scope.name,
    };

    this._helloResource.request('say-hello', payload).send((response) => {
      this._$scope.data = JSON.stringify(response.data, null, '  ');
      this._$scope.$digest();
    });
  }
}

angular.module(moduleName).controller('SayHelloController',
  ['$scope', function(...args) {
    return new SayHelloController(...args);
  },]

);