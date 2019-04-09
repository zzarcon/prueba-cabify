FROM node:11-alpine

RUN mkdir /api

WORKDIR /api

COPY . /api

RUN npm install

RUN npm run build
CMD ["npm", "run", "start"]
