'use strict';
'format es6';

var deepAsset = DeepFramework.Kernel.container.get('asset');

export default {
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
