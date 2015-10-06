![Digital Enterprise End-to-end Platform Microservices](https://github.com/MitocGroup/deep-microservices-helloworld/blob/master/src/DeepHelloWorld/Frontend/img/logo.png) DEEP Microservices HelloWorld
===============================

[![Build Status](https://travis-ci.org/MitocGroup/deep-microservices-helloworld.svg?branch=master)](https://travis-ci.org/MitocGroup/deep-microservices-helloworld)
[![Coverage Status](https://coveralls.io/repos/MitocGroup/deep-microservices-helloworld/badge.svg)](https://coveralls.io/r/MitocGroup/deep-microservices-helloworld)
[![Codacy Badge](https://api.codacy.com/project/badge/b7e24fb220d644728d84742d478ae709)](https://www.codacy.com/app/MitocGroup/deep-microservices-helloworld)

[Digital Enterprise End-to-end Platform](https://github.com/MitocGroup/deep-framework) (also known as DEEP) is low cost and low maintenance Platform-as-a-Service powered by abstracted services (also known as serverless environments) from AWS.

## Getting Started

DEEP Microservice HelloWorld can be used in 4 simple steps:

- Step 1: Install `deepify` (also known as DEEP CLI)
```bash
npm install deepify -g
```
*Note - [How to Install Node.js](http://howtonode.org/how-to-install-nodejs)*

- Step 2: Using `deepify`, create DEEP Microservice HelloWorld
```bash
deepify helloworld ~/deep-hello-world
```
*Note - explain the difference between `deepify helloworld` and `git clone deep-microservices-helloworld`*

- Step 3: Using `deepify`, run DEEP Microservice HelloWorld locally
```bash
deepify server ~/deep-hello-world -o
```

- Step 4: Using `deepify`, deploy DEEP Microservice HelloWorld to AWS
```bash
deepify deploy ~/deep-hello-world
```

### Running Microservices in Development

To be updated


### Running Microservices in Production

To be updated


## Directory Layout

```
DeepHelloWorld/         --> root folder of the DeepHelloWorld microservice
  Frontend/             --> this folder includes everything front-end related
    .deepignore         --> this file is used only when front-end is supposed to be ignored
    _build/             --> this folder, if exists, is used by default and everything else is ignored
    bootstrap.js        --> this file loads the front-end functionality of particular JavaScript app
    index.html          --> this file is required only for root microservice
    js/                 --> this folder includes all JavaScript files
      package.json      --> this file contains the metadata of current front-end (required by JSPM)
      config.system.js  --> this file contains the config data used by JSPM
      app/              --> this folder includes the JavaScript files for web app (e.g. AngularJS, React.js, Backbone.js, etc.)
      lib/              --> this folder includes the JavaScript libraries
      vendor/           --> this folder includes the JavaScript files provided by vendors
    css/                --> this folder includes all stylesheets
    img/                --> this folder includes all images
    fonts/              --> this folder includes all fonts
    ...
  Backend/              --> this folder includes everything back-end related
    .deepignore         --> this file is used only when back-end is supposed to be ignored
    resources.json      --> this file contains the metadata of back-end resoures like Lambda, API Gateway, and so on
    src/                --> this folder includes all files used by back-end
      SayHello/         --> this folder includes the SayHello code loaded into Lambda
        bootstrap.js    --> this file loads the back-end functionality of current Lambda
        package.json    --> this file contains the metadata of current back-end (required by NPM)
        Handler.js      --> this file contains the main code (entry point) for current Lambda
    ...
  Models/               --> this folder includes everything models related
    Account.json        --> this file is an example of the Account's model definition
    User.json           --> this file is an example of the User's model definition
    ...
  Docs/                 --> this folder includes everything documentation related
    index.md            --> this file is an example of index markdown documentation
    ...
  Tests/                --> this folder includes everything testing related
    Frontend/           --> this folder includes front-end related tests
    Backend/            --> this folder includes back-end related tests
    ...
  deepkg.json           --> this file contains the metadata of this microservice
  parameters.json       --> this file contains the parameters used by this microservice
```


## Testing

Our goal is to support two kinds of testing in the deep-microservice-helloworld: Unit tests and End to End tests.

### Running Unit Tests

To be updated

### Running End to End Tests

Coming soon


## Continuous Integration

### Travis CI

[Travis CI](https://travis-ci.org/MitocGroup/deep-microservices-helloworld) is a continuous integration service used to build and test 
projects hosted on GitHub. Travis CI is configured by adding a file named 
[.travis.yml](https://github.com/MitocGroup/deep-microservices-helloworld/blob/master/.travis.yml), 
which is a YAML format text file, to the root directory of the GitHub repository.

### Coveralls

[Coveralls](https://coveralls.io/github/MitocGroup/deep-microservices-helloworld) provides 
constant updates on your project's automated test coverage. It is now available for open source projects 
to start tracking code coverage on project.

### Codacy

[Codacy](https://www.codacy.com/app/MitocGroup/deep-microservices-helloworld) offers an automated 
code review tool for developers that continuously monitors code for problematic patterns, with the aim being 
to reduce the amount of time spent poring over code style.

### ESDoc

[ESDoc](https://esdoc.org) is a documentation generator for JavaScript(ES6). It produces a practical documentation, 
measures the coverage, integrates the test code and more.


## Digital Enterprise End-to-end Platform

[Digital Enterprise End-to-end Platform](https://github.com/MitocGroup/deep-framework) (also known as DEEP) is low cost and low maintenance Platform-as-a-Service powered by abstracted services (also known as serverless environments) from AWS. We enable businesses and developers to achieve more by doing less. [DEEP Framework](https://github.com/MitocGroup/deep-framework) abstracts the cloud services functionality and makes it easy to use and developer friendly.

DEEP is using [microservices architecture](https://en.wikipedia.org/wiki/Microservices) on serverless environments from cloud providers like AWS. [DEEP Microservice](https://github.com/MitocGroup/deep-framework/blob/master/docs/microservice.md) is the predefined structure of a microservice (an application) in DEEP. There is clear separation between frontend, backend and database, as well as unit tests and documentation.

> [DEEP Marketplace](https://www.deep.mg) (aka [www.deep.mg](https://www.deep.mg)) is a web application built using DEEP and published on serverless environment from [Amazon Web Services](https://aws.amazon.com) (aka [aws.amazon.com](https://aws.amazon.com)). We make it faster and easier for developers to build and publish their software, as well as for businesses to discover and test applications they are looking for. Our goal is to connect businesses with developers, and empower technical teams to build self-service software that none technical teams could use. The marketplace is like Apple's App Store for web applications that run natively on cloud providers like AWS.

### License

This repository can be used under the MIT license.
> See [LICENSE](https://github.com/MitocGroup/deep-microservices-helloworld/blob/master/LICENSE) for more details.

### Sponsors

This repository is being sponsored by:
> [Mitoc Group](http://www.mitocgroup.com)
