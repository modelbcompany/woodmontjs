# Deployment

Below you'll find instructions on how to deploy to Zeit Now.

> The [ZEIT Now for GitHub][1] integration automatically deploys your GitHub
> projects with ZEIT Now, providing Preview Deployment URLs, and automatic
> Custom Domain updates.

[1]: https://zeit.co/docs/v2/git-integrations/zeit-now-for-github

## Overview

[Prerequisites](#prerequisites)  
[Environment Variables & Secrets](#environment-variables-&-secrets)  
[Preview Deployment URLs](#preview-deployment-urls)  
[Production](#production)  

## Prerequisites

1. **Review the [Contributing Guide](CONTRIBUTING.md)**

2. **Prepare your site for deployment**

    ```bash
    npm run build
    ```

   For more information, visit [Exporting Storybook as a Static App - Deploying to ZEIT Now][2].

[1]: ./CONTRIBUTING.md
[2]: https://storybook.js.org/docs/basics/exporting-storybook/#deploying-to-zeit-now

## Environment Variables & Secrets

From the Zeit Now docs:

> To define an environment variable for a deployment, use Now Secrets. By using
> Now Secrets, the data will be encrypted and stored securely.

To add environment variables, run the following command:

```bash
  now secrets add <SECRET_NAME> <secret-value>
```

Reference: [Serverless Function Environment Variables and Secrets][1]

[1]: https://zeit.co/docs/v2/serverless-functions/env-and-secrets/

## Preview Deployment URLs

> Preview deployments are the default for all deployments. Each time you push to
> a branch or make a deployment using the now command, this is a preview
> deployment.
>
> By making a preview deployment, the preview URL will be updated to reflect
> that of the latest deployment made.
>
> The preview URL is provided on a pull or merge request when using a ZEIT Now
> for Git Integration and contains the name of the user or team to which the
> Project belongs.  

Reference: [ZEIT Now for GitHub][1]

[1]: https://zeit.co/docs/v2/git-integrations/zeit-now-for-github

## Production

Branch: `master`  
URL: `https://woodmontjs.modelb.now.sh`  

When work is merged into the `master` branch, the **default** branch, Zeit Now
considers this a production deployment:

> Each time you merge to the default branch (commonly master) or make a
> deployment using the `now --prod` command, this is a production deployment.
