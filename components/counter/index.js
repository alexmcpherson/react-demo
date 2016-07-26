import React, { PropTypes } from 'react';

// Pure, or dumb component

const Counter = React.createClass({
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>Add one</button>
      </div>
    );
  }
});

export default Counter;
