### STAGE 1: Build ###

FROM node:14-alpine as builder

WORKDIR /project

COPY ./package*.json /project/

RUN npm ci --quiet --no-progress
COPY . .
RUN npm run build:staging:client-and-server-bundles


### STAGE 2: Create Image ###

FROM node:14-alpine

COPY --from=builder /project/dist /project/dist
COPY ./package*.json /project/
WORKDIR /project
RUN npm ci --only=prod --quiet --no-progress
CMD ["node", "dist/server"]
