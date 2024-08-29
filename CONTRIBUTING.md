# Contributing to embroider-toolbox

Open source projects like `embroider-toolbox` live on your words of encouragement and contribution. Please give feedback, report issues, or submit pull requests!

Here are some guidelines to help you and everyone else.


## Local development

<details>

<summary>Install dependencies</summary>

1. Fork and clone this repo.

    ```sh
    git clone git@github.com:<your-github-handle>/embroider-toolbox.git
    ```

1. Change directory.

    ```sh
    cd embroider-toolbox
    ```

1. Use [`pnpm`](https://pnpm.io/installation) to install dependencies.

    ```sh
    pnpm install
    ```

</details>


<details>

<summary>Lint files</summary>

1. When you write code, please check that it meets the linting rules.

    ```sh
    # From the workspace root
    pnpm lint
    ```

1. You can run `lint:fix` to automatically fix linting errors.

    ```sh
    # From the workspace root
    pnpm lint:fix
    ```

</details>


<details>

<summary>Run tests</summary>

1. When you write code, please check that all tests continue to pass.

    ```sh
    # From the workspace root
    pnpm test
    ```

</details>


<details>

<summary>Add changeset to pull request</code></summary>

1. To record how a pull request affects packages, you will want to add a changeset.

    The changeset provides a summary of the code change. It also describes how package versions should be updated (major, minor, or patch) as a result of the code change.

    ```sh
    # From the workspace root
    pnpm changeset
    ```

</details>


<details>

<summary>Publish packages (for admins)</summary>

1. Generate a [personal access token](https://github.com/settings/tokens/) in GitHub, with `repo` and `read:user` scopes enabled.

1. Run the `release:changelog` script. This removes changesets, updates the package versions, and updates the `CHANGELOG`'s.

    ```sh
    # From the workspace root
    GITHUB_TOKEN=<YOUR_PERSONAL_ACCESS_TOKEN> pnpm release:changelog
    ```

    The `release:changelog` script also updated the workspace root's version (by following the highest version formula). We will use it to name the tag that will be published.

    ```
    # Highest version formula
    workspace root version = max(
      max(all package versions),
      workspace root version + 0.0.1,
    );
    ```

1. [Create a tag](https://github.com/ijlee2/embroider-toolbox/releases/new) and provide release notes. The tag name should match the workspace root's version.

1. Publish the packages.

    ```sh
    # From the workspace root
    pnpm release:publish
    ```

</details>


💡 Have ideas for contribution? Reach out to `@ijlee2` on [Discord](https://discord.com/invite/emberjs)!
