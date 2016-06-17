'use strict';

import backendConfig from './backend-cfg-json';
import Kernel from '../../node_modules/deep-framework/node_modules/deep-kernel';
import Validation from '../../node_modules/deep-framework/node_modules/deep-validation';
import Resource from '../../node_modules/deep-framework/node_modules/deep-resource';
import Security from '../../node_modules/deep-framework/node_modules/deep-security';
import Cache from '../../node_modules/deep-framework/node_modules/deep-cache';
import DB from '../../node_modules/deep-framework/node_modules/deep-db';
import FS from '../../node_modules/deep-framework/node_modules/deep-fs';
import Log from '../../node_modules/deep-framework/node_modules/deep-log';

export default {
  /**
   * @param {Object} services
   * @param {Function} callback
   */
  create: function (callback) {
    let services = {
      Validation: Validation,
      Security: Security,
      Resource: Resource,
      Cache: Cache,
      FS: FS,
      DB: DB,
      Log: Log,
    };

    let backendInstance = new Kernel(services, Kernel.BACKEND_CONTEXT);

    return backendInstance.load(backendConfig, (backendKernel) => {
      callback(backendKernel);
    });
  },
};
