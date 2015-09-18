/**
 * Created by AlexanderC on 9/18/15.
 */

'use strict';

import moduleName from '../name';

export class SayHelloController {
  constructor() {
    // @todo: inject this using ng DI
    this._helloResource = DeepFramework.Kernel.get('resource').get('@hello.world.example:sample');
  }

  catchSubmit() {
    var payload = {
      Name: this.name,
    };

    this._helloResource.request('say-hello', payload).send((response) => {
      this.data = JSON.stringify(response.data, null, '  ');
    });
  }
}

SayHelloController.$inject = [];

angular.module(moduleName).controller('SayHelloController', SayHelloController);
