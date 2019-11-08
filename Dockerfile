FROM node:10

WORKDIR /microservice

COPY ./app/package.json        /microservice
COPY ./app/index.js            /microservice
COPY ./app/app.js              /microservice
COPY ./app/token.controller.js /microservice
COPY ./app/token.route.js      /microservice

ENV port=3000
EXPOSE 3000

RUN npm install
CMD node index.js