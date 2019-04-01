# ⚗️ Experiment Scaffolding

This a production ready scaffolding built with the idea of having a fast and easy way to start a new project with my prefered stack.

The core idea behind this is creating an architecture with independent backend and frontend services that can be deployed by themselves. With any additional services, like in this case the e2e tests.

My main focus here is deploying to a PaaS like Heroku to avoid maintaining servers myself.

Both backend and frontend are dockerized in order to make development and migrating from providers easier.

## Getting started

1. Clone the repository and all of its submodules.

    ```sh
    git clone git@github.com:vilvadot/experiment-scaffolding.git --recursive
    ```

2. Run `make dev`
3. Enjoy

## Deploying

You can deploy to Heroku's container registry (using docker) via the `make release` command inside the submodules. You can alternatively use 

```
make release-api
```

and 

```
make release-web
```

To deploy from the parent folder.

*Not that you will have to associate it to an Heroku app by running `heroku create <app-name>` inside each submodule before the first time you release.