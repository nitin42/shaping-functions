import React from 'react'
import { createCanvas } from './hoc';

const shader = ({timeSync = false}) => `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float parabola( float x, float k ) {
  return pow(4.0 * x * (1.0-x), k);
}

void main() {
  vec2 point = gl_FragCoord.xy / u_resolution.xy;
  float px = 1.0 / u_resolution.y;

  vec2 cp = vec2(cos(u_time),sin(u_time)) * 0.618 + 0.620;
  float l = parabola(point.x, ${timeSync ? 'cp.y * u_time' : 'cp.y'});
  vec3 color = vec3(smoothstep(l, l+px, point.y), sin(u_time), cos(u_time));
    
  gl_FragColor = vec4(color, 1.0);
}
`

export default createCanvas('parabola', shader)