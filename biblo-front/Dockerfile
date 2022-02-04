FROM node:16-alpine as build
WORKDIR /home/node/app
ENV NODE_OPTIONS="–max_old_space_size=8196"
COPY ./package.json /home/node/app
RUN npm install
ENV REACT_APP_BACK_URL="http://localhost:8080/api/v1"
COPY ./ /home/node/app
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build /home/node/app/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf