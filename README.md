## 🚗 Prueba cabify

🚗 My go at [Cabify Backend Challenge](https://github.com/cabify/backend-challenge), trying to use a Service Oriented Architecture.

## How to run it

1. Clone the repository and all of its submodules.

    ```sh
    git clone git@github.com:vilvadot/experiment-scaffolding.git --recursive
    ```

2. Run `make dev`
3. Enjoy

## Running test suite

Run `make test-api`

It takes a few seconds since there are integration tests.

## Deploying

You can deploy to Heroku's container registry (using docker) via the `make release` command inside the submodules. You can alternatively use

```
make release-api
```

To deploy from the parent folder.

*Not that you will have to associate it to an Heroku app by running `heroku create <app-name>` inside each submodule before the first time you release.
