#!/usr/bin/env bash

########################
### Load Head Script ###
########################
source $(dirname $0)/_head.sh


################################
### Install NPM Dependencies ###
################################
__CMD='npm install'


#############################################
### Execute Command for Each Microservice ###
#############################################
subpath_run_cmd ${__MICROSERVICE_HELLOWORLD_PATH} "$__CMD"

