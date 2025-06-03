# my-repo

## Local development

You can get started in 3 steps:

1. Run `pnpm install` to install project dependencies.
1. Run `pnpm build` to build `blueprints-v2-addon` and v2 addons in the `packages` folder.
1. Run `pnpm start` to start `docs-app` ([http://localhost:4200](http://localhost:4200)) and `test-app` ([http://localhost:4300/tests](http://localhost:4300/tests?hidepassed)).

> [!IMPORTANT]
>
> After `pnpm build` in step 2, you need to run `pnpm install` again to install `blueprints-v2-addon`. This extra `install` needs to be done just once, and may be streamlined later.


<details>

<summary>Create addon</summary>

From the workspace root, run the `new` command to create an addon in `packages`. The addon will be included in `docs-app` and `test-app`.

```sh
pnpm addon new <name> [options]

# Example: Create the addon `ui-form`
pnpm addon new ui-form

# Example: Specify the location for a scoped package
pnpm addon new @my-org-ui/form --location ui/form
```

Don't forget to run `pnpm install` to install the addon's dependencies.

</details>


<details>

<summary>Lint and test</summary>

From the workspace root, you can run these commands to apply the action to _all packages_.

```sh
# Check errors
pnpm lint
 
# Fix errors
pnpm lint:fix
 
# Run tests
pnpm test
```

To save time, you can instead run the commands above in some package's root. This will affect _only that package_.

```sh
# Example: Check errors in `@my-org-ui/form`
cd packages/ui/form
pnpm lint
```

</details>


<details>

<summary>Live reload</summary>

Change the current directory to the addon that you want to work on. Run the `start` command to rebuild the addon automatically.

```sh
# Example: Run `@my-org-ui/form`
cd packages/ui/form
pnpm start
```

Assuming that `docs-app` and `test-app` are running, these apps will rebuild after you save a change to the addon.

If you don't see a live reload occur, try restarting the apps.

</details>
