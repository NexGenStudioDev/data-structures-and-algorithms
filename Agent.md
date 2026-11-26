# DSA Handbook Repository Guidelines

## Scope of Changes

- Make changes that serve the user’s request. Keep unrelated edits out of the diff.
- Treat handbook, README, and tracker updates as documentation-only. Preserve solution source files, embedded code examples, tests, and workflows unless the user explicitly asks to update them.
- When a documentation review reveals a bug in a solution, report the file, input, and observed result. Leave the implementation unchanged unless a code fix is requested.
- Preserve the existing chapter order, folder structure, and filenames during routine updates.

## Handbook and Chapter Documentation

- Use the root README as the navigation entry point. Keep the starting-level guides, chapter links, and personal trackers easy to find.
- Add new learning material to the appropriate chapter and link it from that chapter’s README or practice tracker.
- Keep problem titles, difficulty, source platform, and subtopics consistent across references.
- Keep the problem statement and solution easy to find. Use the existing question and solution documents when they are available.
- Verify constraints, examples, expected outputs, and complexity claims before adding them. Label repository-defined practice constraints when they differ from the source problem.
- Preserve the author’s wording and structure outside the requested edits.

## Images and Diagrams

- Keep existing images and their references intact. Ask for approval before deleting, moving, renaming, replacing, or compressing an existing image.
- Use relative paths and meaningful alt text when adding a new image.
- Check that image paths match the exact filename and casing in Git, including paths with spaces.

## Practice Trackers

- Use the problem title to link to the original platform. Use the local question and solution columns to link to files in this repository.
- Reuse the existing row for a problem. If the same problem belongs to more than one topic, link to the same files from each relevant section.
- In Abhishek’s tracker, use `Completed` only when both the local question and solution are linked and resolve to existing files.
- Preserve Akanksha’s personal completion statuses. When syncing the shared question list, add question links and follow her tracker’s existing conventions for solution links and status.
- Use `N/A` when a local question or solution document is unavailable. Never add a placeholder link to a file that does not exist.
- When adding or removing a row, update the chapter total and reconcile any affected chapter-level practice table. Preserve the meaning of each tracker’s status column.

## Verification

- Check that edited Markdown links resolve with the exact path and filename casing.
- Verify heading anchors, table rendering, and image references in the sections you edit.
- Recount affected chapter totals from the question rows. Check that every newly completed entry has valid question and solution links.
- Run `git diff --check` and review `git diff --name-status` before handing off. For a documentation-only request, confirm that the diff contains only the intended Markdown files.
- Report what you verified and identify any issue that still needs attention.

## Git and Publishing

- Check the current branch and working tree before editing. Preserve existing user changes.
- Commit or push only when asked. Stage only the files included in the request.
- Push to the branch the user names. If the user asks to publish to the default branch, verify the changes against that branch before pushing.
- Verify the remote branch and commit after pushing. Report the branch, commit hash, and a short summary of the changes.
