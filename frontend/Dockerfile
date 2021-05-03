FROM node:13.12.0-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN apk --no-cache --virtual build-dependencies add python make g++
RUN npm ci
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

RUN npm run-script build


FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

RUN apk add --no-cache gettext

COPY ./nginx/nginx-entrypoint.sh /

COPY --from=build /app/build ./

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT [ "sh", "/nginx-entrypoint.sh" ]