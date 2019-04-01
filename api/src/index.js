const express = require('express')
const bodyParser = require('body-parser')
const db = require('./database/db')

const app = express();
const PORT = process.env.PORT

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json({ strict: false }));

app.get("/", (req, res) => {
  const es6Check = '🤘🏻';
  res.send(`Welcome to the API ${es6Check} working!! )`);
});

app.get("/api/films", (req, res) => {
  res.json(db.films);
});

app.get("/api/directors", (req, res) => {
  res.json(db.directors);
});

app.listen(PORT, () => console.log(`Listening on: localhost:${PORT}!!`));
