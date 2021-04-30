# webstorm-project-templates

## cra-ts-scss template with linting and pre-commit hook configured

- Check IDE settings to enable and config eslint, prettier, stylelint
- Check package.json for correct fields
- Rewrite pre-commit file (in .husky folder) with following code (if it is not same)
  - `#!/bin/sh`
  - `. "$(dirname "$0")/_/husky.sh"`
  - `npx lint-staged`
- Manually run `npx husky install` after creating a repository
