# <%= options.project.name %>

## Local development

You can get started in 3 steps:

1. Run `pnpm install` to install project dependencies.
1. Run `pnpm build` to build `blueprints-v2-addon` and all addons in the `packages` folder.
1. Run `pnpm start` to start `docs-app` ([http://localhost:4200](http://localhost:4200)) and `test-app` ([http://localhost:4300/tests](http://localhost:4300/tests?hidepassed)).


<details>

<summary>Lint and test</summary>

From the workspace root, you can run these commands to apply the action to _all packages_.

```sh
# Lint files
pnpm lint
pnpm lint:fix

# Run tests
pnpm test
```

To save time, change the current directory to a particular package and run the commands above. This will affect _only that package_.

</details>


<details>

<summary>Create addon</summary>

From the workspace root, run the `new` command to create a package in `packages`. The package will be added to `docs-app` and `test-app`.

```sh
pnpm addon new <name> [options]

# Example: Create the addon `ui-form`
pnpm addon new ui-form

# Example: Specify the location for a scoped package
pnpm addon new @my-org-ui/form --location ui/form
```

Afterwards, run `pnpm install` to update the project dependencies.

</details>


<details>

<summary>Live reload</summary>

Change the current directory to the addon that you want to work on. Run `pnpm start` so that the addon is rebuilt automatically.

```sh
cd packages/ui/form
pnpm start
```

Then, as you change the addon's source code, `docs-app` and `test-app` (assuming they are running) will rebuild automatically.

</details>
