#!/usr/bin/env bash
#
# Created by vcernomschi on 10/06/2015
#

source $(dirname $0)/_head.sh

npm link mocha
npm link codacy-coverage
npm link chai
npm link jasmine-core
npm link istanbul
npm link istanbul-combine
npm link karma
npm link karma-jspm
npm link karma-jasmine
npm link karma-babel-preprocessor
npm link karma-coverage
npm link karma-verbose-reporter
npm link karma-phantomjs-launcher
npm link karma-ng-html2js-preprocessor
npm link isparta

######################
### Run unit tests ###
######################
__CMD="npm run test"
subpath_run_cmd "${__SRC_PATH}" "${__CMD}"
