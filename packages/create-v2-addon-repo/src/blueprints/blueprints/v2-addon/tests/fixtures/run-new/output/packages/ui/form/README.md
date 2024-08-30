# @my-org-ui/form

## Local development

<details>

<summary>Lint and build</summary>

```sh
# Lint files
pnpm lint
pnpm lint:fix

# Build addon
pnpm build

# Live reload ("keep building")
pnpm start
```

</details>

<details>

<summary>Create entity</summary>

From the addon root, run the `generate` command to create the source code and its test file.

```sh
pnpm addon generate <component|helper|modifier|service|util> <name> [options]

# Example: Create a component
pnpm addon generate component ui/form/input

# Example: Use alias
pnpm addon g component ui/form/textarea
```

There may be more than 1 blueprint available. You can pass `--blueprint` to select the right one.

```sh
# Example: Create a <template> tag component
pnpm addon g component ui/form/select --blueprint glimmer-strict
```

For more information, pass `--help`.

</details>

<details>

<summary>Remove entity</summary>

From the addon root, run the `destroy` command to remove the source code and its test file.

```sh
pnpm addon destroy <component|helper|modifier|service|util> <name> 

# Example: Remove a component
pnpm addon destroy component ui/form/input

# Example: Use alias
pnpm addon d component ui/form/textarea
```

</details>


## Compatibility

- Node.js v18 or above
