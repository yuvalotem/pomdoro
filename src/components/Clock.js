import React, { Component } from 'react';
// import NavBar from './NavBar';
// import Clock from './Clock';
// import ActionRow from './ActionRow';
// import './App.css';

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