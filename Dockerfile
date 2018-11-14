### STAGE 1: Build ###

FROM node:10-alpine as builder

WORKDIR /project

COPY ./package*.json /project/

RUN npm ci --quiet --no-progress
COPY . .
RUN npm run build:ssr


### STAGE 2: Create Image ###

FROM node:10-alpine

COPY --from=builder /project/dist /project/dist
COPY ./package*.json /project/
WORKDIR /project
RUN npm ci --only=prod --quiet --no-progress
CMD ["npm", "run", "serve:ssr"]