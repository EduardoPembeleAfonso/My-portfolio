"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec3 vPos;
  void main() {
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vPos;
  uniform float uTime;

  vec3 hash3(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
              dot(p, vec3(269.5, 183.3, 246.1)),
              dot(p, vec3(113.5, 271.9, 124.6)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
              dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
          mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
              dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
      mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
              dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
          mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
              dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y),
      u.z);
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 p = normalize(vPos) * 1.5 + vec3(0.0, 0.0, uTime * 0.01);
    float n = fbm(p);

    vec3 colorA = vec3(0.11, 0.06, 0.19); // roxo escuro (ink)
    vec3 colorB = vec3(0.30, 0.10, 0.42); // roxo nebulosa
    vec3 colorC = vec3(0.05, 0.35, 0.45); // ciano suave

    vec3 color = mix(colorA, colorB, smoothstep(-0.2, 0.5, n));
    color = mix(color, colorC, smoothstep(0.3, 0.7, fbm(p * 1.7)));

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function Nebula() {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.uniforms.uTime.value += delta;
  });

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[50, 32, 32]} />
      <shaderMaterial
        ref={ref}
        side={THREE.BackSide}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        fog={false}
      />
    </mesh>
  );
}