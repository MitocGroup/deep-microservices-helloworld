'use strict';

import DeepFramework from 'deep-framework';
import Handler from './Handler';

export default {
  handler: (event, context) => {
    DeepFramework.KernelFromLambdaContext(context)
      .loadFromFile("_config.json", (deepKernel) => {
        new Handler(deepKernel).run(event, context);
    });
  },
};
