'use strict';

const hookPostDeploy = require('../../hook.post-deploy');

describe('Check hook.post-deploy', () => {
  it('Test hook.post-deploy on update', done => {
    let context = {
      isUpdate: true,
      microservice: {},
      provisioning: {}
    };

    hookPostDeploy.call(context, function() {
      done();
    });
  });
});
