### STAGE 1: Build ###
FROM node:14.1.0-stretch as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts react-router-dom react-bootstrap react-force-graph-3d react-force-graph-2d -g --silent
COPY . /usr/src/app
RUN npm run build


# production environment
FROM nginx:14.1.0-alpine3.10
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]