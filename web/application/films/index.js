import { connect } from 'react-redux'
import Films from './containers/Films'
import { retrieveFilms } from './actions'

const mapStateToProps = state => {
  const { films, loading } = state.films
  return {
    films,
    loading
  }
}

const mapDispatchToProps = dispatch => ({
  loadFilms: () => {
    dispatch(retrieveFilms())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Films)
