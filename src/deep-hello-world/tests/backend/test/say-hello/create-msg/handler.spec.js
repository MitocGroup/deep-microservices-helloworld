// THIS TEST WAS GENERATED AUTOMATICALLY ON Thu Jun 16 2016 17:28:52 GMT+0300 (EEST)

'use strict';

import chai from 'chai';
import Handler from '../../../../../backend/src/say-hello/create-msg/Handler';
import Kernel from '../../../node_modules/deep-framework/node_modules/deep-kernel';
import KernelFactory from '../../common/KernelFactory';

// @todo: Add more advanced tests
suite('Handlers', () => {
  let handler, kernelInstance;

  test('Class Handler exists in say-hello-create-msg module', () => {
    chai.expect(Handler).to.be.an('function');
  });

  test('Load Kernel by using Kernel.load()', (done) => {
    let callback = (backendKernel) => {
      kernelInstance = backendKernel;

      chai.assert.instanceOf(
        backendKernel, Kernel, 'backendKernel is an instance of Kernel'
      );

      // complete the async
      done();
    };

    KernelFactory.create(callback);
  });

  test('Check Handler constructor', () => {
    handler = new Handler(kernelInstance);

    chai.expect(handler).to.be.an.instanceof(Handler);
  });

  test('Check handle throws "MissingRuntimeContextException"', () => {
    let error = null;

    try {
      handler.handle({});
    } catch (e) {
      error = e;
    }

    chai.expect(error.constructor.name).to.equal('MissingRuntimeContextException');
  });

  test('Check handle return valid object', () => {
    let request = {
      Name: 'create-msg test',
    };
    handler._context = {
      context: 'simpleContext',
      invokedFunctionArn: 'test invokedFunctionArn',
      failed: false,
      succeeded: false,
      succeed: function () {
        this.succeeded = true;
      },
      fail: function () {
        this.failed = true;
      }
    };

    handler.handle(request);

    chai.expect(handler.contextSent).to.equal(true);
  });
});
