### STAGE 1: Build ###

FROM node:18-alpine3.18 AS builder

WORKDIR /project

COPY ./package*.json /project/

RUN npm ci --quiet --no-progress
COPY . .
RUN npm run build:client-and-server-bundles


### STAGE 2: Create Image ###

FROM node:18-alpine3.18

COPY --from=builder /project/dist /project/dist
COPY ./package*.json /project/
WORKDIR /project
RUN npm ci --only=prod --quiet --no-progress
CMD ["node", "dist/server/main"]
