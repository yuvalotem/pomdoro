import React, { Component } from 'react';


class Clock extends Component {

  render() {
    return (
      <div className="clock">
          <span>pomdoro</span>
          <span>{this.props.minutes}:{this.props.seconds}</span>
      </div>
    );
  }
}

export default Clock;