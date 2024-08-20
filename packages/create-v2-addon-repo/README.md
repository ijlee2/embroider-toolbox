# create-v2-addon-repo

_Codemod to create a repo with v2 addons_

1. [Features](#features)
1. [Usage](#usage)
1. [Compatibility](#compatibility)
1. [Contributing](#contributing)
1. [License](#license)


## Features

Create a batteries-included project fast:

- Create as many v2 addons as you want
- Run `generate` and `destroy` commands (à la Ember CLI)
- Tailor addon blueprints to your needs
- Explore bleeding-edge Ember: `embroider-css-modules`, `glint`, `<template>` tag out of the box
- Maintain project easily: lint, test, CI, and documentation out of the box


## Usage

Step 1. Use `npx` to run `create-v2-addon-repo`.

```sh
npx create-v2-addon-repo <your-project-name>
```

This will create a folder named `<your-project-name>`.

Step 2. Change directory to the project root, then run these scripts in sequence:

```sh
# Install dependencies
pnpm install

# Build packages
pnpm build
```

```sh
# Commit changes
git init
git add .
git commit -m "Initial commit"
```

```sh
# Push changes (to a new repo)
git remote add origin git@github.com:<your-github-handle>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

Step 3. Use the `new` command to start creating addons.

```sh
pnpm addon new @my-org-ui/form --location ui/form
```


## Compatibility

- Node.js v18 or above


## Contributing

See the [Contributing](../../CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
