'use strict';

import chai from 'chai';
import Handler from '../../../../../backend/src/say-hello/create-msg/Handler';
import Kernel from
  '../../../../../backend/src/say-hello/create-msg/node_modules/deep-framework/node_modules/deep-kernel';
import Resource from
  '../../../../../backend/src/say-hello/create-msg/node_modules/deep-framework/node_modules/deep-resource';
import Log from
  '../../../../../backend/src/say-hello/create-msg/node_modules/deep-framework/node_modules/deep-log';
import KernelFactory from './../../common/KernelFactory';

suite('Handlers', () => {
  let handler, kernelInstance;

  test('Class Handler exists in say-hello-create-msg module', () => {
    chai.expect(Handler).to.be.an('function');
  });

  test('Load Kernel by using Kernel.load()', (done) => {
    let callback = (backendKernel) => {
      chai.assert.instanceOf(
        backendKernel, Kernel, 'backendKernel is an instance of Kernel'
      );

      kernelInstance = backendKernel;

      // complete the async
      done();
    };

    KernelFactory.create({
      Resource: Resource,
      Log: Log,
    }, callback);
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
