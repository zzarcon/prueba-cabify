import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import Logger from './infrastructure/Logger'
import errorHandlers from './middlewares/errorHandler'

const app = express();

new Logger(app).initialize()


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.use(errorHandlers.notFound);
app.use(errorHandlers.errors);


export default app

