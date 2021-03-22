FROM node:12

ENV PORT 8080

WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]