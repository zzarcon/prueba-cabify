import React from 'react'
import { Provider } from 'react-redux'
import { initializeStore } from './store'

const store = initializeStore()
const withReduxStore = app => <Provider store={store}>{app}</Provider>

export default withReduxStore
