FROM node:10

WORKDIR /microservice

COPY ./app/package.json        /microservice
COPY ./app/index.js            /microservice
COPY ./app/app.js              /microservice
COPY ./app/token.controller.js /microservice
COPY ./app/token.route.js      /microservice

ENV JWT_SECRET='Klave muy secreT4'
ENV PORT=3001
EXPOSE 3001

RUN npm install
CMD node index.js