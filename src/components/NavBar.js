import React, { Component } from 'react';
// import NavBar from './NavBar';
// import Clock from './Clock';
// import ActionRow from './ActionRow';
// import './App.css';

class NavBar extends Component {

    changeModeToWork = () =>{
        this.props.changeMode('work')
    }
    changeModeToBreak = () =>{
        this.props.changeMode('break')
    }

  render() {
    return (
      <div className="navbar">
          <button className='nav-button' onClick={this.changeModeToWork}>Work Mode</button>
          <button className='nav-button' onClick={this.changeModeToBreak} >Break Mode</button>
      </div>
    );
  }
}

export default NavBar;