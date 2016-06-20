'use strict';

import chai from 'chai';
import bootstrap from '../../../../../backend/src/say-hello/create-fs/bootstrap';

suite('Bootstraps', () => {
  test(' bootstrap exists in say-hello-create-fs module', () => {
    chai.expect(bootstrap).to.be.an('object');
  });
});
