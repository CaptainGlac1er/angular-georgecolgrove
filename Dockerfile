# Stage 1
FROM node:10-alpine as georgecolgrove-builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
