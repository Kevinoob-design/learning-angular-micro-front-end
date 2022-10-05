FROM node:16.13.0-alpine as development
WORKDIR /app
RUN apk update \
    && apk upgrade \
    && apk add python3 \
    && apk add make \
    && apk add gcc \
    && apk add g++

COPY ./package.json .
RUN yarn
CMD ["yarn", "start"]
