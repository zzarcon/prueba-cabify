import repository from './repositories/FilmsRepository'

export const GET_FILMS_START = 'GET_FILMS_START'
export const GET_FILMS_END = 'GET_FILMS_END'

export const getFilmsStart = () => {
  return {
    type: GET_FILMS_START
  }
}

export const getFilmsEnd = (films) => {
  return {
    type: GET_FILMS_END,
    payload: films
  }
}

export const retrieveFilms = () => {
  return async dispatch => {
    dispatch(getFilmsStart())
    const films = await repository.retrieveFilms()
    dispatch(getFilmsEnd(films))
  }
}
