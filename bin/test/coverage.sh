#!/usr/bin/env bash
#
# Created by vcernomschi on 10/06/2015
#

source $(dirname $0)/_head.sh

##############################
### Merge Coverage Results ###
##############################
istanbul-combine -d ${__COVERAGE_PATH} -r lcovonly -p both \
  ${__SRC_PATH}*/tests/frontend/coverage/report.json \
  ${__SRC_PATH}*/tests/backend/coverage/coverage.json

################################################################
### Update paths to have src/* file in coverage report       ###
### https://github.com/codacy/node-codacy-coverage/issues/26 ###
################################################################
SEARCH_VALUE=$(pwd -P)"/"
REPLACE_VALUE=""

sed -e "s@${SEARCH_VALUE}@${REPLACE_VALUE}@g" ${__COVERAGE_PATH}"/lcov.info" > ${__COVERAGE_PATH}"/coverage.info"


#######################################################
### Upload Coverage info to Codacy only for full CI ###
#######################################################
if [ "${CI_FULL}" == "true" ]; then
  cat ${__COVERAGE_PATH}"/coverage.info" | codacy-coverage --debug
fi

#####################################################################
### Log top 20 file paths to be able see paths format from travis ###
#####################################################################
head -n 20 ${__COVERAGE_PATH}"/coverage.info"

#############################################
### Cleanup! Remove all generated reports ###
#############################################
__CMD='rm -rf ./coverage'
subpath_run_cmd ${__SRC_PATH} "$__CMD"

###########################
### Remove final report ###
###########################
cd ${__COVERAGE_PATH}
rm -rf ${__COVERAGE_PATH}