FROM node:18-alpine3.14

RUN apk add --no-cache chromium
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

WORKDIR /project

COPY ./package*.json /project/

RUN npm ci --quiet --no-progress
COPY . .
CMD ["npm", "run", "test:once"]

