/**
 * Created by Stefan Hariton on 7/8/15.
 */

'use strict';

if (typeof Symbol == 'undefined') {
  require("babel-core/polyfill");
}

import DeepFramework from '@mitocgroup/deep-framework';
import Handler from './Handler';

exports.handler = function (event, context) {
  DeepFramework.Kernel.loadFromFile("_config.json", function (deepKernel) {
    new Handler(deepKernel).run(event, context);
  });
};