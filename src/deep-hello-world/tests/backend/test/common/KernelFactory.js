'use strict';

import backendConfig from './backend-cfg-json';
import Kernel from '../../../../backend/src/say-hello/create-msg/node_modules/deep-framework/node_modules/deep-kernel';

export default {
  /**
   * @param {Object} services
   * @param {Function} callback
   */
  create: function (services, callback) {
    let backendInstance = new Kernel(services, Kernel.BACKEND_CONTEXT);

    return backendInstance.load(backendConfig, (backendKernel) => {
      callback(backendKernel);
    });
  },
};
