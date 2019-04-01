import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import pageWithReduxStore from '../infrastructure/pageWithReduxStore'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default pageWithReduxStore(MyApp)
