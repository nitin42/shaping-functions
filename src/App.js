import React, { Component } from 'react';

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

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className='content-center'>
          <h1 className='heading'>Shaping Functions</h1>        
        </div>
        <div className='canvas-grid'>
          <Parabola/>
          <PowerCurve  />
          <Impulse  />
          <ExpoStep  />
          <Gain  />
          <CubicPulse  />
          <SineCurve  />
          <CurveOne />
          <CurveTwo />
          <CurveThree />
          <CurveFour />
          <CurveFive />
        </div>
      </div>
    );
  }
}

export default App;
