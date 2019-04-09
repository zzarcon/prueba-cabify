const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express();

// TODO: Config CORS correctly
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

export default app

