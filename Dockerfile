FROM node:10.0.0-alpine

ENV NODE_ENV production
ENV PORT 80
ARG SITE_STATS_ENABLED='false'
ARG SITE_COMMIT_SHA1
ARG SITE_BUILD_URL

COPY ./ /usr/src
WORKDIR /usr/src

RUN npm install
RUN npm run build

CMD [ "node", "index.js" ]
EXPOSE 80
