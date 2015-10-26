'use strict';

import moduleName from '../../../../Frontend/js/app/angular/name';

describe('Controllers', function() {
  let $controller;
  let $rootScope;
  let controller = null;

  beforeEach(function() {
    angular.mock.module(moduleName);
  });

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  describe('SayHelloController', function() {

    it('Controller is implemented', function() {
      controller = $controller('SayHelloController', {$scope: {catchSubmit: null, name: 'test'}});

      expect(Object.keys(controller).length).toBe(2);
    });

    it('catchSubmit() method exists and executes without errors', function() {
      let actualResult = null;
      let error = null;

      try {
        actualResult = controller.catchSubmit();
      } catch (e) {
        error = e;
      }

      expect(error).toBe(null);
      expect(actualResult).toBe(undefined);
    });
  });
});
