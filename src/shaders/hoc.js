import React from 'react'
import glslCanvas from 'glslCanvas'

import { Consumer } from '../context'

export const createCanvas = (type, shader) => {
  class Canvas extends React.Component {
    componentDidMount() {
      const canvas = document.getElementById(type)
      this.sandbox = new glslCanvas(canvas)

      this.sandbox.load(shader(this.props))
    }

    componentDidUpdate() {
      this.sandbox.load(shader(this.props))
    }

    render() {
      return <canvas id={type} width={300} height={300} />
    }
  }

  Canvas.displayName = type.toUpperCase()

  return Canvas
}

export const ShaderCanvas = (Shader, heading) => class extends React.Component {
  render() {
    return (
      <Consumer>
        {timesync => (
          <div>
            <Shader timeSync={timesync} />
            <div className='content-center' style={{ marginTop: -15 }}>
              <h1>{heading}</h1>
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}