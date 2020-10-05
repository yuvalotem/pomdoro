import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import ActionRow from './components/ActionRow';
import './App.css';
import MusicRow from './components/MusicRow';

class App extends Component {
  constructor() {
    super()
    this.state = {
      minutes: '25',
      seconds: '00',
      timer: null,
      isWorkMode: true,
      isActive: false,
      shouldPlayMusic: false,
      videoChosen: -1
    }
  }

  tik = () => {
    let newMinutes
    let newSeconds
    if (this.state.seconds === '00') {
      newMinutes = parseInt(this.state.minutes) - 1
      newSeconds = 59
    } else {
      newMinutes = parseInt(this.state.minutes)
      newSeconds = parseInt(this.state.seconds) - 1
    }

    if(newMinutes === -1){
      this.state.isWorkMode ?
      this.changeMode('break'):
      this.changeMode('work')
      return
    }

    if (newMinutes < 10) {
      newMinutes = '0' + newMinutes
    }
    if (newSeconds < 10) {
      newSeconds = '0' + newSeconds
    }

    this.setState({
      minutes: newMinutes.toString(),
      seconds: newSeconds.toString()
    })
  }

  start = () => {
    this.setState({
      isActive: true
    })
    this.state.timer = setInterval(() => {
      this.tik()
    }, 1000)
  }

  pause = () => {
    clearInterval(this.state.timer)
    this.setState({
      isActive: false
    })
  }

  reset = () => {
    let newMinutes
    let playMusic = false
    const newSeconds = '00'
    let newvideo = this.state.videoChosen 
    if (this.state.isWorkMode) {
      newMinutes = '25'
    } else {
      newMinutes = '05'
      playMusic = true
      newvideo = this.state.videoChosen + 1
    }
    if(newvideo > 3){
      newvideo = 0
    }
    this.setState({
      minutes: newMinutes,
      seconds: newSeconds,
      isActive: false,
      shouldPlayMusic: playMusic,
      videoChosen: newvideo
    }, function () {
      clearInterval(this.state.timer)
    })
  }

  changeMode = mode => {
    this.setState({
      isWorkMode: mode === 'work',
      isActive: false
    }, function () {
      this.reset()
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar changeMode={this.changeMode} isWorkMode={this.state.isWorkMode}/>
        <Clock minutes={this.state.minutes} seconds={this.state.seconds} />
        <ActionRow start={this.start} pause={this.pause} reset={this.reset} isActive={this.state.isActive} />
        <MusicRow shouldPlayMusic={this.state.shouldPlayMusic} videoChosen={this.state.videoChosen}/>
      </div>
    );
  }
}

export default App;
