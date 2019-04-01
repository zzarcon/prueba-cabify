FROM cypress/base:10

RUN mkdir /e2e

WORKDIR /e2e

COPY . /e2e

RUN npm install
RUN npm run cypress:install