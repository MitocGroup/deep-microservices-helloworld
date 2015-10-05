/**
 * Created by vcernomschi on 10/5/15.
 */
'use strict';

describe('Bootstrap.js was called and bootstrapped', function() {
  it('deepKernel is instant DeepFramework.Kernel', function() {
    expect(typeof deepKernel).toBe('object');
  });
});