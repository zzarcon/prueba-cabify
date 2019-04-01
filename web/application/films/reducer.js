import { GET_FILMS_START, GET_FILMS_END } from './actions'

const initialState = {
  films: [],
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS_START:
      return {
        ...state,
        films: initialState.films,
        loading: true
      }
    case GET_FILMS_END:
      return {
        ...state,
        films: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
