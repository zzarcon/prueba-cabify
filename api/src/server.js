import app from './app'
import database from './database'
import BasketCollection from './collections/Basket'

const {PORT} = process.env

database.connect()

app.listen(PORT, () => {
  console.log(`Listening on: localhost:${PORT}!!`)
});
