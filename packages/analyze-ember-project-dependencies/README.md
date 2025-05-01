# analyze-ember-project-dependencies

_Analyze dependencies of an Ember project_

1. [Why use it?](#why-use-it)
1. [Usage](#usage)
    - [Arguments](#arguments)
    - [Limitations](#limitations)
1. [Compatibility](#compatibility)
1. [Contributing](#contributing)
1. [License](#license)


## Why use it?

Both Embroider and `pnpm` ask that packages declare their dependencies correctly. The codemod (really, a linter) performs a static code analysis so that you can easily find missing and unused dependencies.

For more information, see [Fixing Package Dependencies](https://crunchingnumbers.live/2024/07/19/fixing-package-dependencies).


## Usage

Step 1. Run the codemod (e.g. at the workspace root of a monorepo).

```sh
cd <path/to/your/project>
npx analyze-ember-project-dependencies
```

Step 2. Check the output for true positives.


### Arguments

<details>

<summary>Optional: Specify the component structure</summary>

By default, apps and addons follow the flat component structure for components. Pass `--component-structure` to indicate otherwise.

```sh
npx analyze-ember-project-dependencies --component-structure nested
```

</details>

<details>

<summary>Optional: Specify the project root</summary>

Pass `--root` to run the codemod somewhere else (i.e. not in the current directory).

```sh
npx analyze-ember-project-dependencies --root <path/to/your/project>
```

</details>


### Limitations

The codemod is designed to cover typical cases. It is not designed to cover one-off cases.

To better meet your needs, consider cloning the repo and running the codemod locally.

```sh
cd <path/to/cloned/repo>

# Compile TypeScript
pnpm build

# Run codemod
./dist/bin/analyze-ember-project-dependencies.js --root <path/to/your/project>
```

> [!IMPORTANT]
>
> The codemod uses a list called `KNOWN_ENTITIES` to analyze implicit code. The list accounts for packages that live outside of your project. It isn't meant to be (and doesn't have to be) exhaustive.
>
> You can modify `KNOWN_ENTITIES` to get more accurate results.
>
> <details>
> 
> <summary><code>src/utils/find-entities/known-entities.ts</code></summary>
> 
> ```ts
> const KNOWN_ENTITIES = new Map<PackageName, Partial<ProjectDataEntities>>([
>   [
>     '@ember/render-modifiers',
>     {
>       modifiers: ['did-insert', 'did-update', 'will-destroy'],
>     },
>   ],
> 
>   // ...
> ]);
> ```
> 
> </details>


## Compatibility

- Node.js v20 or above


## Contributing

See the [Contributing](../../CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
