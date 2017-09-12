'use strict';

const hookPostDeploy = require('../../hook.post-deploy');

describe('Check hook.post-deploy', () => {
  it('Test hook.post-deploy on update', done => {
    let isUpdate = true;

    hookPostDeploy(function() {
      done();
    }).bind(this);
  });
});
