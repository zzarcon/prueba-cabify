import React from 'react'
import { PropTypes } from 'prop-types'
import { initializeStore } from '../infrastructure/store'
import AppRuntime from '../domain/AppRuntime'

export default App => {
  return class AppWithRedux extends React.Component {
    static propTypes = {
      initialReduxState: PropTypes.object
    }

    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}

const getOrCreateStore = (initialState) => {
  const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'
  // Always make a new store if server, otherwise state is shared between requests
  if (AppRuntime.isServer()) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}
