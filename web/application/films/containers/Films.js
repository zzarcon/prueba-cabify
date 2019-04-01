import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'
import Films from '../components/Films'
import Loader from '../components/Loader'
import FilmsButton from '../components/Button'

class FilmsContainer extends Component {
  static propTypes = {
    loadFilms: PropTypes.func.isRequired,
    films: PropTypes.array.isRequired,
    loading: PropTypes.bool
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    this.props.loadFilms()
  }

  render() {
    const { loading, films } = this.props
    return (
      <Fragment>
        <h3>Films list:</h3>
        {
          loading
            ? <Loader/>
            : <Films films={films} loading={loading} />
        }
        <FilmsButton onClick={() => this.loadData()} primary>Load films</FilmsButton>
      </Fragment>
    )
  }
}

export default FilmsContainer
