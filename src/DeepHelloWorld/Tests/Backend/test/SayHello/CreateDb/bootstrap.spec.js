// THIS TEST WAS GENERATED AUTOMATICALLY ON Tue May 03 2016 15:10:58 GMT+0300 (EEST)

'use strict';

import chai from 'chai';
import bootstrap from '../../../node_modules/SayHello/CreateDb/bootstrap';

let expect = chai.expect;

// @todo: Add more advanced tests
suite('Bootstraps', () => {
  test(' bootstrap exists in say-hello-create-db module', () => {
    expect(bootstrap).to.be.an('object');
  });
});
