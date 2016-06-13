#!/bin/bash

npm link chai &&\
npm link aws-sdk &&\
npm link node-dir &&\
npm link deepify &&\
npm link babel-preset-es2015 &&\
ln -s ../../../backend/src/say-hello ./node_modules
