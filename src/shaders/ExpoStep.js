import { createShaderCanvas } from 'react-shader-canvas'
import { ShaderCanvas } from './hoc';

const shader = ({timeSync = false}) => `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float expStep( float x, float k, float n ){
  return exp( -k*pow(x,n) );
}

void main() {
  vec2 point = gl_FragCoord.xy / u_resolution.xy;
  float px = 1.0 / u_resolution.y;

  vec2 cp = vec2(cos(u_time),sin(u_time)) * 0.618 + 0.620;
  float l = expStep(point.x, ${timeSync ? 'cp.x * u_time' : 'cp.x'}, ${timeSync ? 'cp.y * u_time' : 'cp.y'});
  vec3 color = vec3(smoothstep(l, l+px, point.y), sin(u_time), cos(cp.y) * 0.5);
    
  gl_FragColor = vec4(color, 1.0);
}
`

export default ShaderCanvas(createShaderCanvas(shader), 'Exponential Step')