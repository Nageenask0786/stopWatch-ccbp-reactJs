// Write your
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {timeInSeconds: 0}

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  componentDidAmount = () => {
    this.timerId = setInterval(this.runTime, 1000)
  }

  runTime = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startTimer = () => {
    this.timerId = setInterval(this.runTime, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="stop-watch-container">
        <h1 className="timer">Stopwatch</h1>
        <div className="card">
          <div className="flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img"
            />
            <h1 className="head">Timer</h1>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="button-container">
            <button className="button1" type="button" onClick={this.startTimer}>
              Start
            </button>
            <button className="button2" type="button" onClick={this.stopTimer}>
              Stop
            </button>
            <button className="button3" type="button" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
