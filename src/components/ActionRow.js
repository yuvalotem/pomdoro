import React, { Component } from 'react';
// import NavBar from './NavBar';
// import Clock from './Clock';
// import ActionRow from './ActionRow';
// import './App.css';

class ActionRow extends Component {
    showButton(){
        if(this.props.isActive){
            return (<button className='action-button' onClick={this.props.pause}>Pause</button>)
        }else{
            return <button className='action-button' onClick={this.props.start}>Start</button>
        }
    }

  render() {
    return (
      <div className="action">
          <span></span>
          {this.showButton()}
          <button className='action-button' onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default ActionRow;