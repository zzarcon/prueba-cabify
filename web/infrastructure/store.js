import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import counterReducer from '../application/counter/reducer'
import filmsReducer from '../application/films/reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  films: filmsReducer
})

export const initializeStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
