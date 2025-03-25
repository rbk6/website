# personal website

## dev setup

#### docker

to ensure the experience stays consistent with the website in production, it is recommended to setup docker before proceeding with the following steps. once docker is setup:

- set desired container name: `export CONTAINER_NAME=<container-name>`
- build and start the container (development mode):  
  `docker build -f Dockerfile -t $CONTAINER_NAME --target development . && docker start $CONTAINER_NAME`
- run tests:  
  `docker build -f Dockerfile -t $CONTAINER_NAME --target test . && docker run $CONTAINER_NAME`
- remove all containers/images (cleanup): `docker rm -f $(docker ps -aq) && docker rmi -f $(docker images -aq)`

note: there will be a local and network option shown, but only the local option will work. this is due to the `host` field within the `vite.config` file, which adds the network link to the output.

#### running locally (not recommended)

running the app locally isn't recommended, as the experience may differ from running it inside the container. this could lead to unexpected or undesired results, which is why docker is recommended (it's easier and more reliable).

to run locally, install the dependencies and start the app using the following commands:

- install dependencies: `npm install`
- run locally: `npm run dev`

## CI/CD

this project contains a workflow that points to my [pipeline repository](https://github.com/rbk6/pipeline) and triggers an automated deployment to the virtual private server hosting [my website](https://rbk6.dev). for more context and implementation details, feel free to check that out.
