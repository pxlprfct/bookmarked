# Releasing

Versioning is done locally with [changesets](https://github.com/changesets/changesets). CI stages the release on npm and a maintainer approves it with 2FA.

1. While working, describe each user-facing change: `pnpm changeset` (writes a file in `.changeset/`).
2. To release, run `pnpm run version`. This consumes the changesets, bumps `package.json` and updates `CHANGELOG.md`.
3. Commit, tag and push to Forgejo: `git commit -am "chore: release vX.Y.Z" && git tag vX.Y.Z && git push --follow-tags`.
4. The `release` workflow verifies the package and runs `npm stage publish`. It uses the `NPM_TOKEN` repository secret, which must be a granular token with "Read and write (stage only)".
5. Review and approve: `npm stage list`, then `npm stage approve <stage-id>` (or approve on npmjs.com). Nothing is public until this step.

Requires npm 11.15+ and Node 22.14+ (CI uses the version in `.nvmrc`).
