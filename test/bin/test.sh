#!/usr/bin/env bash

########################
### Load Head Script ###
########################
source $(dirname $0)/_head.sh


######################
### Run Unit Tests ###
######################
__CMD='npm run test'


#############################################
### Execute Command for Each Microservice ###
#############################################
subpath_run_cmd ${__MICROSERVICE_HELLOWORLD_PATH} "$__CMD"

