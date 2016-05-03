// THIS TEST WAS GENERATED AUTOMATICALLY ON Tue May 03 2016 14:57:54 GMT+0300 (EEST)

'use strict';

import chai from 'chai';
import bootstrap from '../../../node_modules/SayHello/CreateMsg/bootstrap';

// @todo: Add more advanced tests
suite('Bootstraps', () => {
  test(' bootstrap exists in say-hello-create-msg module', () => {
    chai.expect(bootstrap).to.be.an('object');
  });
});
