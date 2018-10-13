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
          <p className="link"><a className="introduction" rel="noopener noreferrer" href="https://github.com/nitin42/shaping-functions#introduction" target="_blank">Preamble{' '}</a></p>
        </div>
        <div className="content-center" style={{ marginTop: -20, marginBottom: 20 }}>
          <span className="small-heading" style={{ padding: 5 }}>Playback Time - {' '}</span>
          <label className="switch" data-tip="Animate using shader playback time" >
            <input type="checkbox" value={this.state.timeSync} onChange={this.handleTimeSync} />
            <span className="toggle"></span>
          </label>
          <ReactTooltip place="right" />
        </div>
        <div className='canvas-grid'>
          <Provider value={this.state.timesync}>
            <Parabola id="parabola" />
            <PowerCurve id="power-curve" />
            <Impulse id="impulse-curve" />
            <ExpoStep id="expo-step" />
            <Gain id="gain-curve" />
            <CubicPulse id="cubic-pulse" />
            <SineCurve id="sine-curve" />
            <CurveOne id="kynd-curve-one" />
            <CurveTwo id="kynd-curve-two" />
            <CurveThree id="kynd-curve-three" />
            <CurveFour id="kynd-curve-four" />
            <CurveFive id="kynd-curve-five" />
          </Provider>
        </div>
        <footer className='footer content-center'>
          <p className="link">
            Made with <span role="img" aria-label="heart">❤️</span> by{' '}
            <a
              href="https://nitin-tulswani.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
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
