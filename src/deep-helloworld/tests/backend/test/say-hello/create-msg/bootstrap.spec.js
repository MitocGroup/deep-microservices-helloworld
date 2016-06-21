'use strict';

import chai from 'chai';
import bootstrap from '../../../../../backend/src/say-hello/create-msg/bootstrap';

suite('Bootstraps', () => {
  test(' bootstrap exists in say-hello-create-msg module', () => {
    chai.expect(bootstrap).to.be.an('object');
  });
});
