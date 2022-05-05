FROM node:alpine
COPY . /var/lib/server/
WORKDIR /var/lib/server
RUN yarn install
EXPOSE 4000
CMD [ "yarn", "start"]