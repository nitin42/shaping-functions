import React from 'react'
import { Consumer } from '../context'

export const ShaderCanvas = (Shader, heading) => class extends React.Component {
  render() {
    return (
      <Consumer>
        {timesync => (
          <div>
            <Shader timeSync={timesync} id={this.props.id} />
            <div className='content-center' style={{ marginTop: -15 }}>
              <h1>{heading}</h1>
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}