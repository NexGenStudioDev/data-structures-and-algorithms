# Contributing to the DSA Handbook

Corrections to explanations, broken links, and practice trackers are welcome. You can also propose a new problem or a clearer solution walkthrough.

## Open an issue

Include the chapter or file, the problem title when relevant, and what needs to change. For a solution bug, include the language, a reproducible input, the expected output, and the output you observed.

## Prepare a pull request

1. Start from the default branch and create a branch for your change.
2. Find the appropriate chapter and check whether the problem already has a question, solution, or tracker entry.
3. Follow the chapter’s existing structure. For a new problem, link to the source and write an original explanation with a worked example. For a new solution, include its approach, time and space complexity, and relevant edge cases.
4. Update affected links and tracker counts. Keep personal completion statuses independent.
5. Run `git diff --check`, review the changed files, and verify local links and images. If your pull request changes an implementation, run it on representative examples and boundary inputs.
6. Open a pull request describing what changed and what you verified. Link the issue if one exists.

Use material you have permission to contribute and credit third-party sources. See the [license](./LICENSE), [repository guidelines](./Agent.md), and [code of conduct](./CODE_OF_CONDUCT.md).
