import { createCanvas, ShaderCanvas } from './hoc'

const shader = ({ timeSync = false }) => `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float plotCurve( float x, float k ) {
  return pow(cos(3.142 * x / 2.0), k);
}

void main() {
  vec2 point = gl_FragCoord.xy / u_resolution.xy;
  float px = 1.0 / u_resolution.y;

  vec2 cp = vec2(cos(u_time),sin(u_time)) * 0.618 + 0.620;
  float l = plotCurve(point.x, ${timeSync ? 'u_time * cp.y' : 'cp.y'});
  vec3 color = vec3(smoothstep(l, l+px, point.y), tan(cp.y), fract(cp.x));
    
  gl_FragColor = vec4(color, 1.0);
}
`

export default ShaderCanvas(createCanvas('curvetwo', shader), 'Curve Two');