# personal website

## dev setup

#### docker

to ensure the experience stays consistent with the website in production, it is recommended to setup docker before proceeding with the following steps. once docker is setup:

- build the container: `docker build -f Dockerfile -t <container-name> --target development .`
- run from the container: `docker run -p 3000:3000 <container-name>`
  - note: there will be a local and network option shown, but only the local option will work. this is due to the `host` field within the `vite.config` file, which adds the network link to the output.

#### running locally (not recommended)

running the app locally isn't recommended, as the experience may differ from running it inside the container. this could lead to unexpected or undesired results, which is why docker is recommended (it's easier and more reliable).

to run locally, install the dependencies and start the app using the following commands:

- install dependencies: `npm install`
- run locally: `npm run dev`
