# @my-org-ui/button

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

<summary>Generate and destroy</summary>

From the package root, you can create (or remove) the source code and its corresponding test file in `test-app`.

```sh
pnpm addon <generate|destroy> <component|helper|modifier|service|util> <name> [options]

# Examples
pnpm addon g component hello-world
pnpm addon d component hello-world
```

There may be more than 1 blueprint available. You can pass `--blueprint` to select the right one.

For more information, pass `--help`.

</details>


## Compatibility

* Node.js v18 or above
