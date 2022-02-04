FROM node:16-alpine
WORKDIR /home/node/app
ENV NODE_OPTIONS="–max_old_space_size=8196"
COPY ./package.json /home/node/app
RUN npm install
ENV PORT="8080"
ENV DB_URL="postgres"
ENV DB_PORT="5432"
ENV DB_USER="admin"
ENV DB_PASSWORD="admin"
ENV DB="biblioteca"
ENV DB_DIALECT="postgres"
COPY ./ /home/node/app
CMD npm run prod