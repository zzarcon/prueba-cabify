import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Counter extends Component {
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.props.onIncrement}>+1</button>
        <button onClick={this.props.onDecrement}>-1</button>
        <button onClick={this.props.onReset}>Reset</button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

export default Counter
