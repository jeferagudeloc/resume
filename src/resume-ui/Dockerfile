FROM node:latest

WORKDIR /app

COPY ./package*.json /app/

RUN yarn

COPY . .

ENV PATH ./node_modules/.bin/:$PATH