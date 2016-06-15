// THIS TEST WAS GENERATED AUTOMATICALLY ON Tue Jun 14 2016 18:31:05 GMT+0300 (EEST)

'use strict';

import chai from 'chai';
import bootstrap from '../../../../../backend/src/say-hello/create-fs/bootstrap';

// @todo: Add more advanced tests
suite('Bootstraps', () => {
  test(' bootstrap exists in say-hello-create-fs module', () => {
    chai.expect(bootstrap).to.be.an('object');
  });
});
