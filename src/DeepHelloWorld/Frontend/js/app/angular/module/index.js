'use strict';
'format es6';

import moduleName from '../name';
import moduleDependencies from './ng-module';
import config from './ng-config';
import run from './ng-run';

export default angular.module(moduleName, moduleDependencies)
  .config(config)
  .run(run);
