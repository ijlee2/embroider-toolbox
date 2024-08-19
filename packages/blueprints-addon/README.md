# blueprints-addon

_CLI for v2 addons_

1. [Features](#features)
1. [Usage](#usage)
1. [Compatibility](#compatibility)


## Features

Standardize how you write v2 addons:

- Run `new` to create a v2 addon
- Run `generate` to create source and test files
- Run `destroy` to remove source and test files
- Blueprints available for components, helpers, modifiers, services, and utilities
- Tailor addon blueprints to your needs


## Usage

Install `blueprints-addon` as a development dependency in these locations:

<details>

<summary>Workspace root</summary>

```json5
/* package.json */
{
  "scripts": {
    "addon": "blueprints-addon"
  },
  "devDependencies": {
    "blueprints-addon": "workspace:*"
  }
}
```

</details>

<details>

<summary>V2 addon in <code>packages</code></summary>

```json5
/* Example: packages/ui/button/package.json */
{
  "scripts": {
    "addon": "blueprints-addon --test-app-location '../../../test-app'"
  },
  "devDependencies": {
    "blueprints-addon": "workspace:*"
  }
}
```

</details>

> [!NOTE]
>
> After you build `blueprints-addon`, please run `pnpm install` at the workspace root so that the blueprints are available.


## Compatibility

- Node.js v18 or above
