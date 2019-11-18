FROM node:12.13.0

WORKDIR /microservice

COPY ./app/package.json      /microservice
COPY ./app/package-lock.json /microservice
COPY ./app/index.js          /microservice
COPY ./app/app.js            /microservice
COPY ./app/controllers       /microservice/controllers
COPY ./app/utils             /microservice/utils
COPY ./app/routes            /microservice/routes
COPY ./app/models            /microservice/models

ENV JWT_SECRET='Klave muy secreT4'
ENV PORT=3001
EXPOSE 3001

RUN npm install
CMD node index.js