import React, { PropTypes } from 'react';

import Counter from '../counter';

const name = "Alex"

// The 'smart' component, often called a 'container' in redux.

const Wrapper = React.createClass({

  getInitialState() {
    return {
      count: 0
    }
  },

  render() {
    return (
      <div>
        <p>Hello {name}</p>
        <Counter count={this.state.count} increment={this.incrementCount}/>
      </div>
    );
  },

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
});

export default Wrapper;
