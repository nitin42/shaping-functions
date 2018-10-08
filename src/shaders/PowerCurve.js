import { createCanvas, ShaderCanvas } from './hoc';

const shader = ({timeSync = false}) => `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
	
float pcurve( float x, float a, float b ){
  float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));
  return k * pow( x, a ) * pow( 1.0-x, b );
}

void main() {
  vec2 point = gl_FragCoord.xy / u_resolution.xy;
  float px = 1.0 / u_resolution.y;

  vec2 cp = vec2(cos(u_time),sin(u_time)) * 0.618 + 0.620;
  float l = pcurve(point.x, ${timeSync ? 'cp.x * u_time' : 'cp.x'}, ${timeSync ? 'cp.y * u_time': 'cp.y'});
  vec3 color = vec3(smoothstep(l, l+px, point.y), tan(u_time), sin(cp.y));
    
  gl_FragColor = vec4(color, 1.0);
}
`
export default ShaderCanvas(createCanvas('powercurve', shader), 'Power Curve')