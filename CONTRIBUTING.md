# Contributing to KATS

First things first, thanks for taking the time to consider contributing! :tada::smile:

**Do not hesitate to contribute - let's make a great starter kit together!**

The following is a set of guidelines for contributing to KATS and its packages, which are hosted in the [Kandelborg Organization](https://github.com/Kandelborg) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Index

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

- [KATS and Packages](#mona-and-packages)
- [Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Pull Requests](#pull-requests)

[Styleguides](#styleguides)

- [Git Commit Messages](#git-commit-messages)
- [JavaScript & TypeScript Styleguide](#javascript-&-typescript-styleguide)
- [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)

- [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [KATS Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [mathias@kandelborg.dk](mailto:mathias@kandelborg.dk).

## I don't want to read this whole thing I just have a question!!!

> **Note:** Please don't file an issue to ask a question. You'll get faster results by using the resources below.

We have an official message board where the community chimes in with helpful advice if you have questions.

- [Spectrum, the official KATS forum & chat](https://spectrum.chat/mona)

## What should I know before I get started?

### KATS

KATS is the API part of the MoNA 'universe'

#### Package Conventions

There are a few conventions that applies to all repositories:

- Commit linting
- Semantic versioning
- MIT (or similar) license

### Design Decisions

If you have a question around how we do things, check to see if it is documented .
If it is _not_ documented, please open a new topic on [Spectrum, the official KATS message board](https://spectrum.chat/mona) and ask your question.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for KATS. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are maintaining a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Check the [debugging guide](#).** **TBA**
- **Check the [the forum](https://spectrum.chat/mona)** for a list of common questions and problems.
- **Determine [which repository the problem should be reported in](#mona-and-packages)**.
- **Look through [the issues](https://github.com/Kandelborg/KATS-starter-kit/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#mona-and-packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started the dev server, e.g. which command exactly you used in the terminal, or how you started KATS otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or a command, and if so which one?
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pastable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/phw/peek) or [this tool](https://github.com/GNOME/byzanz) on Linux.

Include details about your environment:

- **Specify the name and version of the OS you're using.**
- **Specify the name and version of relevant software you're using**? E.g. VS Code 1.33.0-insider, Google Chrome 73.0.3683.75 (Official Build) (64-bit)

Provide more context by answering these questions:

- **Did the problem start happening recently** (e.g. after updating to a new version of KATS) or was this always a problem?
- If the problem started happening recently, **can you reproduce the problem in an older version of KATS?** What's the most recent version in which the problem doesn't happen? You can download older versions of KATS from [the releases page](https://github.com/Kandelborg/mona-starter-kit/releases).
- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for KATS, including completely new features, refactoring and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are maintaining an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

- **Check if there's already [a package](https://npmjs.com) which provides that enhancement.**
- **Look through [the issues](https://github.com/Kandelborg/KATS-starter-kit/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of KATS which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/phw/peek) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most KATS users
- **List some other starter kits or relevant places where this enhancement exists.**
- **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to KATS? You can start by looking through these `beginner`, `good-first-issue`, and `help-wanted` issues:

- [Good first issue](https://github.com/Kandelborg/KATS-starter-kit/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) - issues which are deemed good for first time contributors
- [Beginner issues](https://github.com/Kandelborg/KATS-starter-kit/issues?q=is%3Aopen+is%3Aissue+label%3A%22beginner%22) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues](https://github.com/Kandelborg/KATS-starter-kit/issues?q=is%3Aopen+is%3Aissue+label%3A%help+wanted%22) - issues which should be a bit more involved than `beginner` issues.

The issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Pull Requests

The process described here has several goals:

- Maintain KATS's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible starter kit
- Enable a sustainable system for KATS's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md) **which still needs to be made**
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

This repository utilizes [commitizen](http://commitizen.github.io/cz-cli/) & [commitlint](https://conventional-changelog.github.io/commitlint/#/) to ensure proper commit messages.

Adhere to the commit message rules, by using the npm script `npm run cz` to commit changes.

When contributing changes to KATS, make a branch called something relevant. _E.g, if the change is regards to the homepage, then make a branch called `pages-index` or `index-page` - something that contextually makes sense._

- Use the `cz` npm script to commit changes
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### JavaScript & TypeScript Styleguide

All JavaScript & TypeScript must adhere to [the Prettier configuration](/.prettierrc.js).

The easiest way to follow the styleguide is to automatically format the code on save or on blur events for each file.

### Documentation Styleguide

- Use [Markdown](https://daringfireball.net/projects/markdown).
- Follow the [Markdown lint rules](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md) - you can use a markdown linting extension to make that easier.

## Additional Notes

When you are done making changes, squash the commits and make a pull request.

This document is based on the amazing [contributing.md in the Atom repo](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
