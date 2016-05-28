// THIS TEST WAS GENERATED AUTOMATICALLY ON Fri May 06 2016 11:43:32 GMT+0300 (EEST)

'use strict';

import chai from 'chai';
import bootstrap from '../../../node_modules/SayHello/CreateDb/bootstrap';

// @todo: Add more advanced tests
suite('Bootstraps', () => {
  test(' bootstrap exists in say-hello-create-db module', () => {
    chai.expect(bootstrap).to.be.an('object');
  });
});
