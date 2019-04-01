import db from './db.mock'

export default {
  retrieveFilms() {
    return Promise.resolve(db.films)
  }
}
