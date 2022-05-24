FROM node:12.22-alpine3.11

RUN apk add --no-cache  chromium --repository=https://pkgs.alpinelinux.org/package/v3.11/community/x86_64/chromium
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

WORKDIR /project

COPY ./package*.json /project/

RUN npm ci --quiet --no-progress
COPY . .
CMD ["npm", "run", "test:once"]

