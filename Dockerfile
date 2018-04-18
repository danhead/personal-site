FROM node:8.11.1-alpine

COPY ./ /usr/src
WORKDIR /usr/src

ENV NODE_ENV production
ENV PORT 80
EXPOSE 80

RUN npm install

RUN npm run css

CMD [ "node", "index.js" ]
