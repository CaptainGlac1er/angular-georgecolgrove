### STAGE 1: Build ###

FROM node:22-alpine AS builder

WORKDIR /project

COPY ./package*.json /project/

RUN npm ci --quiet --no-progress
COPY . .
RUN npm run build:client-and-server-bundles


### STAGE 2: Create Image ###

FROM node:22-alpine

COPY --from=builder /project/dist /project/dist
COPY ./package*.json /project/
WORKDIR /project
RUN npm ci --only=prod --quiet --no-progress
WORKDIR /project/dist
CMD ["node", "server/server.mjs"]
