'use strict';

import chai from 'chai';
import bootstrap from '../../../../../backend/src/say-hello/create-db/bootstrap';

suite('Bootstraps', () => {
  test(' bootstrap exists in say-hello-create-db module', () => {
    chai.expect(bootstrap).to.be.an('object');
  });
});
