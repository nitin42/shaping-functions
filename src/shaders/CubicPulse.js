import React from 'react'

import { createCanvas } from './hoc'

const shader = ({timeSync = false}) => `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
	
float cubicPulse( float c, float w, float x ){
  x = abs(x - c);
  if( x>w ) return 0.0;
  x /= w;
  return 1.0 - x*x*(3.0-2.0*x);
}

void main() {
  vec2 point = gl_FragCoord.xy / u_resolution.xy;
  float px = 1.0 / u_resolution.y;

  vec2 cp = vec2(cos(u_time),sin(u_time)) * 0.618 + 0.620;
  float l = cubicPulse(${timeSync ? 'cp.x * u_time / 10.0' : 'cp.x'}, ${timeSync ? 'cp.y * u_time / 10.0' : 'cp.y'}, point.x);
  vec3 color = vec3(smoothstep(l, l+px, point.y), tan(u_time), sin(cp.y));
    
  gl_FragColor = vec4(color, 1.0);
}
`

export default createCanvas('cubicpulse', shader)