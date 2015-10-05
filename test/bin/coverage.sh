#!/usr/bin/env bash

source $(dirname $0)/_head.sh

### Run Coverage ###
__CMD='npm run coverage'
subpath_run_cmd ${__SRC_PATH} "$__CMD"

### Merge Coverage results ###
echo "Starting combining"

istanbul-combine -d ${__COVERAGE_PATH} -r lcovonly -p both \
  ${__SRC_PATH}*/Tests/Frontend/coverage/*/*.json
  ${__SRC_PATH}*/Tests/Backend/coverage/*.json

echo "Done combining"

cd ${__COVERAGE_PATH}
ls -l
## Upload Coverage info to Codacy ###
#cat ${__COVERAGE_PATH}"/lcov.info" | codacy-coverage
#cat ${__COVERAGE_PATH}"/lcov.info" | coveralls

echo "Starting cleaup"
### Cleanup! ###
__CMD='rm -rf ./coverage'

subpath_run_cmd ${__SRC_PATH} "$__CMD"
cd ${__COVERAGE_PATH}
rm -rf ./coverage


echo "Done cleaup"
cd ${__COVERAGE_PATH}

