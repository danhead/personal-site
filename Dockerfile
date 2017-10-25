FROM node:8.7.0-alpine

COPY ./ /usr/src
WORKDIR /usr/src

ENV NODE_ENV production
ENV PORT 80
EXPOSE 80

RUN npm install

RUN npm run build

CMD [ "node", "index.js" ]
