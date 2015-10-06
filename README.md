DEEP Microservices HelloWorld
=============================

[![Build Status](https://travis-ci.org/MitocGroup/deep-microservices-helloworld.svg)](https://travis-ci.org/MitocGroup/deep-microservices-helloworld)
[![Coverage Status](https://coveralls.io/repos/MitocGroup/deep-microservices-helloworld/badge.svg)](https://coveralls.io/r/MitocGroup/deep-microservices-helloworld)
[![Codacy Badge](https://api.codacy.com/project/badge/b7e24fb220d644728d84742d478ae709)](https://www.codacy.com/app/MitocGroup/deep-microservices-helloworld)

![Digital Enterprise End-to-end Platform Microservices](src/DeepHelloWorld/Frontend/img/logo.png)

## Digital Enterprise End-to-end Platform

[Digital Enterprise End-to-end Platform](https://github.com/MitocGroup/deep-framework) (also known as DEEP) is low cost and low maintenance Platform-as-a-Service powered by abstracted services (also known as serverless environments) from AWS. We enable businesses and developers to achieve more by doing less. [DEEP Framework](https://github.com/MitocGroup/deep-framework) abstracts the cloud services functionality and makes it easy to use and developer friendly.

DEEP is using [microservices architecture](https://en.wikipedia.org/wiki/Microservices) on serverless environments from cloud providers like AWS. [DEEP Microservice](https://github.com/MitocGroup/deep-framework/blob/master/docs/microservice.md) is the predefined structure of a microservice (an application) in DEEP. There is clear separation between frontend, backend and database, as well as unit tests and documentation.

> [DEEP Marketplace](https://www.deep.mg) (aka [www.deep.mg](https://www.deep.mg)) is a web application built using DEEP and published on serverless environment from [Amazon Web Services](https://aws.amazon.com) (aka [aws.amazon.com](https://aws.amazon.com)). We make it faster and easier for developers to build and publish their software, as well as for businesses to discover and test applications they are looking for. Our goal is to connect businesses with developers, and empower technical teams to build self-service software that none technical teams could use. The marketplace is like Apple's App Store for web applications that run natively on cloud providers like AWS.

## Get Started

    # Install deepify, aka DEEP CLI
    npm install deepify -g

    # Using deepify, create DEEP Microservice HelloWorld
    deepify helloworld ~/deep-hello-world

    # Run DEEP Microservice HelloWorld locally
    deepify server ~/deep-hello-world -o

    # Deploy DEEP Microservice HelloWorld to AWS
    deepify deploy ~/deep-hello-world

## License

This repository can be used under the MIT license.
> See [LICENSE](LICENSE) for more details.

## Sponsors

This repository is being sponsored by:
> [Mitoc Group](http://www.mitocgroup.com)
