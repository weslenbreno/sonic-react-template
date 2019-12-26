# build environment
FROM node:12.13.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app/
RUN yarn --silent
RUN yarn global add react-scripts
CMD ["yarn", "start"]


