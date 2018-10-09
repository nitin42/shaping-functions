import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

import Parabola from './shaders/Parabola'
import Impulse from './shaders/Impulse'
import ExpoStep from './shaders/ExpoStep'
import Gain from './shaders/Gain'
import PowerCurve from './shaders/PowerCurve'
import CubicPulse from './shaders/CubicPulse'
import SineCurve from './shaders/SineCurve'
import CurveOne from './shaders/CurveOne'
import CurveTwo from './shaders/CurveTwo'
import CurveThree from './shaders/CurveThree'
import CurveFour from './shaders/CurveFour'
import CurveFive from './shaders/CurveFive'

import { Provider } from './context'

import './App.css'

class App extends Component {
  state = {
    timesync: false
  }

  handleTimeSync = e => this.setState(state => ({ timesync: !state.timesync }))

  render() {
    return (
      <div>
        <div className='content-center'>
          <h1 className='heading'>Shaping Functions</h1>
        </div>
        <div className='content-center' style={{ marginTop: -20, marginBottom: 20 }}>
          <p className="link"><a className="introduction" href="https://github.com/nitin42/shaping-functions#introduction" target="_blank">Preamble{' '}</a></p>
        </div>
        <div className="content-center" style={{ marginTop: -20, marginBottom: 20 }}>
          <span style={{ padding: 5, fontSize: '1.2em'}}>Timesync - {' '}</span>
          <label className="switch" data-tip="Animate using shader playback time" >
            <input type="checkbox" value={this.state.timeSync} onChange={this.handleTimeSync} />
            <span className="toggle"></span>
          </label>
          <ReactTooltip place="right" />
        </div>
        <div className='canvas-grid'>
        <Provider value={this.state.timesync}>
          <Parabola />
          <PowerCurve />
          <Impulse />
          <ExpoStep />
          <Gain />
          <CubicPulse />
          <SineCurve />
          <CurveOne />
          <CurveTwo />
          <CurveThree />
          <CurveFour />
          <CurveFive />
        </Provider>
        </div>
        <footer className='footer content-center'>
          <p className="link">
            Made with ❤️ by{' '}
            <a
              href="https://nitin-tulswani.surge.sh/"
              target="_blank"
            >
              Nitin Tulswani
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
