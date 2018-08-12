# Stage 1
FROM node:10-alpine as georgecolgrove-builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build-prod
# Stage 2
FROM nginx:1-alpine
COPY --from=georgecolgrove-builder /usr/src/app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
