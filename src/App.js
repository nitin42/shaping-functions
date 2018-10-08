import React, { Component } from 'react';
import { css } from 'emotion'

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
        <div className={css`display: flex; justify-content: center`}>
        <h1 className={css`font-size: 4em; font-family: 'Monoton', cursive;
`}>Shaping Functions</h1>        
        </div>
        <div className={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-items: center;
          grid-gap: 10px;
        `}>
      <div>
        <h1>Parabola</h1>
        <Parabola  />
      </div>
      <div>
        <h1>Power Curve</h1>
        <PowerCurve  />
      </div>
      <div>
        <h1>Impulse Curve</h1>
        <Impulse  />
      </div>
      <div>
        <h1>Exponential Step</h1>
        <ExpoStep  />
      </div>
      <div>
        <h1>Gain Curve</h1>
        <Gain  />
      </div>
      <div>
        <h1>Cubic Pulse</h1>
        <CubicPulse  />
      </div>
      <div>
        <h1>Sine Curve</h1>
        <SineCurve  />
      </div>
      <div>
        <h1>Curve One</h1>
        <CurveOne />
      </div>
      <div>
        <h1>Curve Two</h1>
        <CurveTwo />
      </div>
      <div>
        <h1>Curve Three</h1>
        <CurveThree />
      </div>
      <div>
        <h1>Curve Four</h1>
        <CurveFour />
      </div>
      <div>
        <h1>Curve Five</h1>
        <CurveFive />
      </div>
      </div>
      </div>
    );
  }
}

export default App;
