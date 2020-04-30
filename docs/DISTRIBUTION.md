# Distribution

Below you'll find instructions on how to publish your package to the Github
Package Registry.

## Overview

[Prerequisites](#prerequisites)  
[Local Distribution](#local-distribution)  
[Github Package Registry](#github-package-registry)  

## Prerequisites

1. **Set up npm for use with GitHub Packages**

   If you haven't done so already, you'll need to [configure npm to be used with Github Packages][1].

   [1]: https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages

2. **Review the [Contributing Guide](CONTRIBUTING.md)**

   Be sure to update your `.gitconfig`.

   The following aliases are neccessary to publish the package to the Github
   Package Registry

    ```ini
      [alias]
        # Test packages locally
        link = "!f() { npm run build; npm link; }; f"

        # Run build script and local prepublish script
        prepub = "!f() { npm run build; node prepublish.js; }; f"

        # Publish package
        pub = "!f() { git prepub; npm publish ./dist; }; f"
    ```

## Local Distribution

1. **Prepare your the package for distribution and create a symlink**

   From the root of your design system project, run the following command:

   ```bash
   git link
   ```

   This will build the project, as well as create a symlink in the global folder
   for your design system.

2. **Link the design system to your dependant project**

   From the root of the dependant project, run the following:

   ```bash
   npm link package-name
   ```
  
   From the [_`npm-link`_][1] documentation:

   > This will create a symbolic link will create a symbolic link from
   > globally-installed `package-name` to `node_modules/` of the current folder.
   >
   > Note that `package-name` is taken from package.json, not from directory
   > name.

   [1]: https://docs.npmjs.com/cli/link.html

3. **Turn off any CI/CD integrations**

   If using an integration similar to [ZEIT Now for GitHub][1], be sure to
   disable the integration. Unless your package has been published, your
   automatic deployments will fail.

   [1]: https://zeit.co/docs/v2/git-integrations/zeit-now-for-github

## Github Package Registry

1. **Update the version number in the `package.json`**

   For more information, visit [About semantic versioning][1] from the [npm docs][2].

   [1]: https://docs.npmjs.com/about-semantic-versioning
   [2]: https://docs.npmjs.com/

2. **Run `git pub`**

   This will rebuild the Storybook app and documentation website, build
   the production distrubution package, and then publish the package to the
   Github Package Registry.
