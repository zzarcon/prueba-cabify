import app from './app'
import database from './database'

const {PORT} = process.env

database.connect()

app.listen(PORT, () => {
  console.log(`Listening on: localhost:${PORT}!!`)
});
