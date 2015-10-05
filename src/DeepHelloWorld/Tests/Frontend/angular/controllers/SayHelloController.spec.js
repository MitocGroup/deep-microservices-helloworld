'use strict';

import moduleName from '../../../../Frontend/js/app/angular/name';

describe('Controllers', function() {
  let $controller;
  let $rootScope;

  beforeEach(function() {
    angular.mock.module(moduleName);
  });

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  describe('SayHelloController', function() {
    it('Controller is not implemented', function() {
      let controller = $controller('SayHelloController', {$scope: {catchSubmit: null}});
      expect(Object.keys(controller).length).toBe(2);
    });
  });

})
;
