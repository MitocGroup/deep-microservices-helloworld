#!/bin/bash

npm link chai &&\
npm link aws-sdk &&\
npm link node-dir &&\
npm link deepify &&\
ln -s ../../../Backend/src/SayHello ./node_modules
