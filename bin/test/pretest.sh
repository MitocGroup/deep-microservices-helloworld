#!/usr/bin/env bash
#
# Created by vcernomschi on 10/06/2015
#

source $(dirname $0)/_head.sh

checkStatus () {
  curl -sL -w "%{http_code}\\n" "$1" -o /dev/null
}

isLocalServerUp () {
  NEXT_WAIT_INDEX=0
  CHECK_STATUS_TIMEOUT=3
  DEEPIFY_TIMEOUT=3000
  CURRENT_TIMEOUT=0

  while true; do
    STATUS=$(checkStatus "http://localhost:8000/")

    CURRENT_TIMEOUT=$((NEXT_WAIT_INDEX*$CHECK_STATUS_TIMEOUT))
    echo "$STATUS"

    if [ $STATUS == "200" ]; then
      echo "STATUS OK"
      break
    elif [ $CURRENT_TIMEOUT -lt $DEEPIFY_TIMEOUT ]; then
      NEXT_WAIT_INDEX=$((NEXT_WAIT_INDEX+1))
      echo "Sleeping $CURRENT_TIMEOUT"
      sleep $CHECK_STATUS_TIMEOUT
    else
      echo "TIMEOUT EXPIRED: $CURRENT_TIMEOUT"
      exit 1
    fi

  done

  exit 0
}

##########################################################
### launch local server and check if it up and running ###
##########################################################
if [ "${__TRAVIS_NODE_MAJOR_VERSION}" != "5" ] && [ "${__E2E_WITH_PUBLIC_REPO}" = "${E2E_TESTING}" ]; then
  deepify server ${__SRC_PATH} -s & sleep 15 & isLocalServerUp
else
  echo "Skipping launching deepify server"
fi
