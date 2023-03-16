## Description

Content of `[your-site]` website 

## Practical notes
- Please keep this repo clean and for markdown content ONLY
- In case you have any issue with rendering, how website looks (design), etc, please file an issue on [logos website builder](https://github.com/acid-info/logos-site-builder/issues). And/or feel free to contact Amir.

## Continuous Integration

Two branches are built by [our Jenkins instance](https://ci.infra.status.im/):

* `master` branch is deployed to https://acid.info by [CI](https://ci.infra.status.im/job/website/job/acid.info/).
* `develop` branch is deployed to https://dev.acid.info by [CI](https://ci.infra.status.im/job/website/job/dev.acid.info/).

PRs should be made for `develop` branch and `master` should be [rebased](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) on `develop` once changes are verified.

## Process
1. Clone this repo for a new website (click on use this template)
2. Adjust the Jekinfile: Update DEV_SITE environment variable in the Jenkinsfile in the clone logos site-builder content template with your domain, such as dev.domain.com and uncomment it before the build.
3. Add your domain name to CNAME file located in `/statis-assets/`CNAME` 
4. Create a issue and assign to @serhanwbahar to take care of deployment
