# Releasing

Releases are staged by CI and approved by a maintainer with 2FA.

1. Add the release notes to `CHANGELOG.md`.
2. Bump the version and tag it: `npm version <major|minor|patch>` (commits and creates `vX.Y.Z`).
3. Push the commit and the tag to Forgejo: `git push --follow-tags`.
4. The `release` workflow verifies the package and runs `npm stage publish`. It uses the `NPM_TOKEN` repository secret, which must be a granular token with "Read and write (stage only)".
5. Review and approve: `npm stage list`, then `npm stage approve <stage-id>` (or approve on npmjs.com). Nothing is public until this step.

Requires npm 11.15+ and Node 22.14+ (CI uses the version in `.nvmrc`).
