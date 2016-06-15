#!/bin/bash

npm link chai &&\
npm link aws-sdk &&\
npm link node-dir &&\
npm link deepify &&\
npm link babel-preset-es2015 &&\

############################################
#TODO: TEMPORARY FIX FOR NODE MORE THAN v5 #
############################################
(npm list -g deep-framework --depth=0 || npm install deep-framework -g babel-cli) &&\
npm link deep-framework