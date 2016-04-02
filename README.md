deep-microservices-helloworld
=============================

[![Build Status](https://travis-ci.org/MitocGroup/deep-microservices-helloworld.svg?branch=master)](https://travis-ci.org/MitocGroup/deep-microservices-helloworld)
[![Codacy Badge](https://api.codacy.com/project/badge/coverage/9583758a5b30454580527e4f90abc564)](https://www.codacy.com/app/MitocGroup/deep-microservices-helloworld)

deep-microservices-helloworld is a very simple microservice designed to illustrate the basic syntax for
constructing a web application built of top of [DEEP Framework](https://github.com/MitocGroup/deep-framework).
This repository is open sourced to show case how developers can build and deploy hassle-free cloud-native
web applications using microservices architecture and serverless computing.


## Getting Started

### Step 1. Pre-requisites

- [x] [Create an Amazon Web Services account](https://www.youtube.com/watch?v=WviHsoz8yHk)
- [x] [Configure AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- [x] [Get Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [x] [JDK 8 and JRE 8 Installation Start Here](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html)
- [x] [Install nvm](https://github.com/creationix/nvm#install-script) and [use node v4.3+](https://github.com/creationix/nvm#usage)
- [ ] Install DEEP CLI, also known as `deepify`:

```bash
npm install deepify -g
```

> If you want to use `deepify` on Windows, please follow the steps from
[Windows Configuration](https://github.com/MitocGroup/deep-framework/blob/master/docs/windows.md)
before running `npm install deepify -g` and make sure all `npm` and `deepify` commands are executed
inside Git Bash.

### Step 2. Install Microservice(s) Locally

```bash
deepify install github://MitocGroup/deep-microservices-skeleton ~/deep-microservices-skeleton
```

> Path parameter in all `deepify` commands is optional and if not specified, assumes current
working directory. Therefore you can skip `~/deep-microservices-skeleton` by executing
`mkdir ~/deep-microservices-skeleton && cd ~/deep-microservices-skeleton` before `deepify install`.

### Step 3. Run Microservice(s) in Development

```bash
deepify server ~/deep-microservices-skeleton -o
```

> When this step is finished, you can open in your browser the link *http://localhost:8000*
and enjoy the deep-microservices-skeleton running locally.

### Step 4. Run Microservice(s) in Production

```bash
deepify deploy ~/deep-microservices-skeleton
```

> Amazon CloudFront distribution takes up to 20 minutes to provision, therefore don’t worry
if it returns an HTTP error in the first couple of minutes.

### Step 5. Remove Microservice(s) from Production

```bash
deepify undeploy ~/deep-microservices-skeleton
```

> Amazon CloudFront distribution takes up to 20 minutes to unprovision. That's why `deepify`
command checks every 30 seconds if it's disabled and when successful, removes it from your account.


## Developer Resources

Having questions related to deep-microservices-skeleton?

- Ask questions: https://stackoverflow.com/questions/tagged/deep-framework
- Chat with us: https://gitter.im/MitocGroup/deep-framework
- Send an email: feedback@deep.mg

Interested in contributing to deep-microservices-skeleton?

- Contributing: https://github.com/MitocGroup/deep-microservices-skeleton/blob/master/CONTRIBUTING.md
- Issue tracker: https://github.com/MitocGroup/deep-microservices-skeleton/issues
- Releases: https://github.com/MitocGroup/deep-microservices-skeleton/releases
- Roadmap: https://github.com/MitocGroup/deep-microservices-skeleton/blob/master/ROADMAP.md

Looking for web applications that use (or are similar to) deep-microservices-skeleton?

- Hello World: https://hello.deep.mg | https://github.com/MitocGroup/deep-microservices-helloworld
- Todo App: https://todo.deep.mg | https://github.com/MitocGroup/deep-microservices-todo-app
- Enterprise Software Marketplace: https://www.deep.mg

## Sponsors

This repository is being sponsored by:
- [Mitoc Group](https://www.mitocgroup.com)
- [DEEP Marketplace](https://www.deep.mg)

This code can be used under MIT license:
> See [LICENSE](https://github.com/MitocGroup/deep-microservices-skeleton/blob/master/LICENSE) for more details.
