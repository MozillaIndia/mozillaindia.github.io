# Contribute

You can help by finding out problems on the website (QA), sending suggestions, and/or coding.

## Reporting problems or suggestions

Go through [the issues](https://github.com/MozillaIndia/mozillaindia.github.io/issues?q=is%3Aissue) and create a new issue if yours is not already added.

## Adding code

### Setting up developer tools

The website is just plain HTML, javascript, and CSS (using [bulma](https://bulma.io/) framework). To make simple edits, you can even directly edit on github. But if you would like to set up a local workspace, here is what you should do.

1. Fork and clone the repo as described in git workflow below
2. Have a server run in the clone repository. Here is a [list of single line servers](https://gist.github.com/willurd/5720255).

**Optionally**, for further convenience as a developer, you can choose to setup the following:
* [yarn](https://yarnpkg.com/) for package management. ([npm](https://www.npmjs.com/) might work as well, but not been tested and not recommended in order to avoid conflict with yarn.lock)
* `yarn install` to have all the developer dependencies be installed
* This gives you access to the following scripts
  * `yarn run copy-bulma`: copies the bulma css from npm package installed into node_modules
  * `yarn run html-lint`: checks the html for errors
  * `yarn run http-server`: runs a server listening at localhost:8080

## Use with docker
Run the below command in the git repository to serve the website at localhost

``` docker-compose up ```

### Git workflow

* Fork this repo using the button at the top.
* Clone your forked repo locally.

```
$ git clone git@github.com:yourname/mozillaindia.github.io.git
```

* Don't modify or work on the master branch, we'll use it to always be in sync with the upstream.

```
$ git remote add upstream git@github.com:MozillaIndia/mozillaindia.github.io.git
$ git fetch upstream
```

* If you're working on something that doesn't have an issue related to it, create an issue.
* Comment on the related issue that you're working on it.
* Once you're clear to go, go to your local copy and create a new branch to work on it. Use a descriptive name for it, include the issue number for reference.

``$ git checkout -b add-contribution-guidelines-68``

* Do your coding and push it to your fork.
  * Use spacing and code style that is consistent with the rest of the file.
  * Include as few commits as possible (one should be enough) and a good description. ([Read this about writing good commit messages](http://365git.tumblr.com/post/3308646748/writing-git-commit-messages)). Include a reference to the issue with "Fix #number".

```
$ git commit -m "Add contribution guidelines. Fix #68"
$ git push origin add-contribution-guidelines-68
```

* Do a new pull request from your "add-contribution-guidelines-68" branch to MozillaIndia/mozillaindia.github.io "master".

#### How to implement changes suggested on a pull request

Sometimes when you submit a PR, you will be asked to correct some code. You can make the changes on your work branch and commit normally and the PR will be automatically updated.

``$ git commit -am "Ops, fixing typo"``

Once everything is OK, you will be asked to merge all commit messages into one to keep history clean.

``$ git rebase -i master``

Edit the file and mark as fixup (f) all commits you want to merge with the first one:

```
pick 0343e07 Add contribution guidelines. Fix #68
f b435a67 Ops, fixing typo
```

Once rebased you can force a push to your fork branch and the PR will be automatically updated.

``$ git push origin add-contribution-guidelines-68 --force``

#### How to keep your local branches updated

To keep your local master branch updated with upstream, regularly do:

```
$ git fetch upstream
$ git checkout master
$ git pull --rebase upstream master
```

To update the branch you are coding in:

```
$ git checkout add-contribution-guidelines-68
$ git rebase master
```

#### Attribution
This file is derived from work by @zhukov [here](https://github.com/zhukov/webogram/blob/master/CONTRIBUTING.md).
