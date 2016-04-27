#!/usr/bin/env bash

echo "CI: ${CI}"
echo "TRAVIS_BUILD_ID: ${TRAVIS_BUILD_ID}"

if [ "$CI" = "true" ] && [ "$TRAVIS_BUILD_ID" = "" ]; then
    echo "Running from Trevor"
fi

cmd='karma start config.karma.js'

eval $cmd