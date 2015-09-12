#!/usr/bin/env bash

#####################
### Project Token ###
#####################
#__CODACY_TOKEN=""
#__COVERALLS_TOKEN=""


########################
### Load Head Script ###
########################
source $(dirname $0)/_head.sh


##############################
### Merge Coverage Results ###
##############################
istanbul-combine -d ${__COVERAGE_PATH} -r lcovonly -p both \
  ${__MICROSERVICE_HELLOWORLD_PATH}/Frontend/coverage/*/coverage-final.json


###############################
### Upload Coverage Results ###
###############################
#__CMD='export CODACY_PROJECT_TOKEN=${__CODACY_TOKEN}; cat "${__COVERAGE_PATH}"lcov.info | codacy-coverage'
__CMD='cat "${__COVERAGE_PATH}"lcov.info | codacy-coverage'
subpath_run_cmd ${__COVERAGE_PATH} "$__CMD"

#__CMD='export COVERALLS_PROJECT_TOKEN=${__COVERALLS_TOKEN}; cat "${__COVERAGE_PATH}"lcov.info | coveralls'
__CMD='cat "${__COVERAGE_PATH}"lcov.info | coveralls'
subpath_run_cmd ${__COVERAGE_PATH} "$__CMD"


################################
### Cleanup Coverage Results ###
################################
__CMD='rm -rf ./test/coverage'
subpath_run_cmd ${__ROOT_PATH} "$__CMD"

__CMD='rm -rf '${__MICROSERVICE_HELLOWORLD_PATH}/Tests/*/coverage/
subpath_run_cmd ${__ROOT_PATH} "$__CMD"

