# pull official base image
FROM node:13.12.0-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY frontend/package.json ./
COPY frontend/package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY ./frontend ./

RUN npm run-script build

# pull official base image
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]