#!/usr/bin/env bash

################################
### Define Global Parameters ###
################################
__SCRIPT_PATH=$(cd $(dirname $0); pwd -P)
__ROOT_PATH="${__SCRIPT_PATH}/../../"
__COVERAGE_PATH=${__SCRIPT_PATH}"/../coverage/"


#########################################
### Define Path for Each Microservice ###
#########################################
__MICROSERVICE_HELLOWORLD_PATH="${__ROOT_PATH}HelloWorld/Frontend/js/"


###############################
### Define Global Functions ###
###############################
subpath_run_cmd () {
    local DIR
    local CMD
    local EXPR

    DIR=$(cd $1 && pwd -P)
    CMD=$2

    cd $DIR/${subpath} && eval_or_exit "$CMD"
}

eval_or_exit() {
    local RET_CODE

    eval "$1"
    RET_CODE=$?

    if [ ${RET_CODE} == 0 ]; then
        echo "[SUCCEED] $1"
    else
        echo "[FAILED] $1"
        exit 1
    fi
}

