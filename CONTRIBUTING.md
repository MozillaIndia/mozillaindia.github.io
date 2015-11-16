# Contribute

You can help by finding out problems on the website (QA), sending suggestions, and/or coding.

## Reporting problems or suggestions

Go through [the issues](https://github.com/MozillaIndia/homepage/issues?q=is%3Aissue) and create a new issue if yours is not already added.

## Coding

### Setting up development environment

You will need to have less installed. Do `npm install -g less`.
To compile the less into css, you'll have to do
```
$ lessc less/styles.less css/styles.css
```

It will be handy to have a simple server installed. [Here is a big list of them](https://gist.github.com/willurd/5720255).

### Git workflow

* Fork this repo using the button at the top.
* Clone your forked repo locally.

```
$ git clone git@github.com:yourname/homepage.git
```

* Don't modify or work on the gh-pages branch, we'll use it to always be in sync with the upstream.

```
$ git remote add upstream git@github.com:MozillaIndia/homepage.git
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

* Do a new pull request from your "add-contribution-guidelines-68" branch to MozillaIndia/homepage "gh-pages".

#### How to implement changes suggested on a pull request

Sometimes when you submit a PR, you will be asked to correct some code. You can make the changes on your work branch and commit normally and the PR will be automatically updated.

``$ git commit -am "Ops, fixing typo"``

Once everything is OK, you will be asked to merge all commit messages into one to keep history clean.

``$ git rebase -i gh-pages``

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
$ git checkout gh-pages
$ git pull --rebase upstream gh-pages
```

To update the branch you are coding in:

```
$ git checkout add-contribution-guidelines-68
$ git rebase gh-pages
```

#### Attribution
This file is derived from work by @zhukov [here](https://github.com/zhukov/webogram/blob/master/CONTRIBUTING.md).
