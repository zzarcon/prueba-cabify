import app from './app'
import database from './infrastructure/Database'

const {PORT} = process.env

database.connect()

app.listen(PORT, () => {
  console.log(`Listening on: localhost:${PORT}!!`)
});
