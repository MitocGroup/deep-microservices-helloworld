![Digital Enterprise End-to-end Platform Microservices](https://github.com/MitocGroup/deep-microservices-helloworld/blob/master/src/DeepHelloWorld/Frontend/img/logo.png) DEEP Hello World 
==================

[![Build Status](https://travis-ci.org/MitocGroup/deep-microservices-helloworld.svg?branch=master)](https://travis-ci.org/MitocGroup/deep-microservices-helloworld)
[![Codacy Badge](https://api.codacy.com/project/badge/coverage/9583758a5b30454580527e4f90abc564)](https://www.codacy.com/app/MitocGroup/deep-microservices-helloworld)

`DEEP Hello World` (https://github.com/MitocGroup/deep-microservices-helloworld) is a web app that show cases 
a full stack example of using DEEP Microservices in the context of Platform-as-a-Service. Developers can either 
fork this repository or run in the command line `npm install deepify -g` (https://www.npmjs.com/package/deepify) 
and `deepify helloworld ~/deep-hello-world`.

## Getting Started [![Join char on gitter.im](https://img.shields.io/badge/%E2%8A%AA%20gitter%20-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/MitocGroup/deep-framework)

`DEEP Hello World` can be used by executing the following 4 simple steps in command line:

1. Install DEEP CLI, also known as deepify:

  `npm install deepify -g`
> deepify is a collection of tools that empower developers and devops engineers to automate
the management of web apps built on top of DEEP ecosystem.

2. Using deepify, dump locally the helloworld example:

  `deepify helloworld ~/deep-hello-world`
> deepify will clone the repository from GitHub and pull all the dependencies in one place.

3. Using deepify, run locally the helloworld example

  `deepify server ~/deep-hello-world -o`
> deepify launches a web server that can be used for local development, without making calls
to web services from cloud providers like AWS.

4. Using deepify, deploy to AWS the helloworld example

  `deepify deploy ~/deep-hello-world`
> deepify provisions the infrastructure and deploys the web app, empowering developers and
devops engineers to automate the process.

To learn more about `DEEP CLI` and `DEEP Framework`, please follow the link
[What is DEEP Framework?](https://github.com/MitocGroup/deep-framework/blob/master/README.md#what-is-deep-framework-)

### Running Microservices in Development

See Step 3 in 
[Getting Started](https://github.com/MitocGroup/deep-microservices-helloworld/blob/master/README.md#getting-started)
> Coming soon (more details)

### Running Microservices in Production

See Step 4 in 
[Getting Started](https://github.com/MitocGroup/deep-microservices-hellowworld/blob/master/README.md#getting-started)
> Coming soon (more details)


## Directory Layout [![Join char on gitter.im](https://img.shields.io/badge/%E2%8A%AA%20gitter%20-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/MitocGroup/deep-framework)

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


## How do I test this project? [![Join char on gitter.im](https://img.shields.io/badge/%E2%8A%AA%20gitter%20-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/MitocGroup/deep-framework)

Our goal is to support two kinds of testing in the deep-microservice-helloworld: Unit tests and End to End tests.

### Running Unit Tests

Initially microservice preconfigured with health-check unit tests. These are written in
[Jasmine](https://github.com/jasmine/jasmine), which we run with 
[Karma Test Runner](https://github.com/karma-runner/karma). We provide a Karma configuration file to run them.

* the configuration is found at `config.karma.js`
* the unit tests are found next to the code they are testing and are named as `*.spec.js`

The easiest way to run the unit tests is to use the supplied npm script:

```
karma start path/to/config.karma.js
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  

Besides of Karma we also provide ```Mocha + Chai``` preconfiguration for backend unit testing.

As best practice was configured code coverage tool ```Istanbul``` to gather actual code coverage metrics in ES6 
without code transpiling (was used ```isparta``` reporter).

### Running End to End Tests

Coming soon


## How can I get involved? [![Join char on gitter.im](https://img.shields.io/badge/%E2%8A%AA%20gitter%20-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/MitocGroup/deep-framework)

### Feedback

We are eager to get your feedback, so please use whatever communication channel you prefer:
- [github issues](https://github.com/MitocGroup/deep-microservices-helloworld/issues)
- [gitter chat room](https://gitter.im/MitocGroup/deep-framework)
- [deep email address](mailto:feedback@deep.mg)

### Contribution

This project is open source, and we encourage developers to contribute. Here below is the easiest way to do so:

1. [Fork](http://help.github.com/forking/) this repository in GitHub.
2. Develop the feature in your repository. Make one or more commits to your repository in GitHub.
3. Perform a [pull request](http://help.github.com/pull-requests/) from your repository back into original repository in GitHub.

Make sure you update `package.json` (or `deepkg.json`, depends on the use case) and put your name and contact information in contributors section. We would like to recognize the work and empower every contributor in creative ways :)

### Roadmap

Our short-to-medium-term roadmap items, in order of descending priority:

Feature | Details | Owner
--------|---------|------
Implement end-to-end testing | To be updated | [@vcernomschi](https://github.com/vcernomschi)

### Changelog

Changelog files are located in `/changelog` folder.
> See [CHANGELOG.md](https://github.com/MitocGroup/deep-microservices-helloworld/blob/master/CHANGELOG.md) for latest changelog.

### License

This repository can be used under the MIT license.
> See [LICENSE](https://github.com/MitocGroup/deep-microservices-helloworld/blob/master/LICENSE) for more details.

### Sponsors

This repository is being sponsored by:
> [Mitoc Group](http://www.mitocgroup.com)
