FROM node:9-alpine

RUN mkdir /web

WORKDIR /web

COPY . /web

RUN npm install

RUN npm run build
CMD ["npm", "run", "start"]