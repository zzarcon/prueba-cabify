import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { incrementCount, decrementCount, resetCount } from '../actions'
import Counter from '../components/Counter'

class CounterContainer extends Component {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    reset: PropTypes.func
  }

  render() {
    const { count, increment, decrement, reset } = this.props

    return (
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    )
  }
}

const mapStateToProps = state => {
  const { count } = state.counter
  return { count }
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCount),
  decrement: () => dispatch(decrementCount),
  reset: () => dispatch(resetCount)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)
