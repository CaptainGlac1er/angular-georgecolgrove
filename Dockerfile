### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:10-alpine as builder

WORKDIR /project

COPY ./package*.json /project/

RUN ls

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
#RUN npm i ## --cache /tmp/empty-cache ## --progress=false --depth=0
RUN npm install --quiet --no-progress
COPY . .
## Build the angular app in production mode and store the artifacts in dist folder
#RUN npm run build:static
RUN npm run build:ssr


### STAGE 2: Setup ###

FROM node:10-alpine

## Install http-server
#RUN npm install http-server -g

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /project/dist /project/dist
COPY ./package*.json /project/
WORKDIR /project
RUN npm install --only=prod
CMD ["npm", "run", "serve:ssr"]