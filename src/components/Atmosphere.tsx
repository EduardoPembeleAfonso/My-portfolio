"use client";

import * as THREE from "three";

const vertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vNormal;
  uniform vec3 uColor;
  void main() {
    float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
    gl_FragColor = vec4(uColor, 1.0) * intensity;
  }
`;

export default function Atmosphere({
    radius = 1.5,
    color = "#c6f135",
}: {
    radius?: number;
    color?: string;
}) {
    return (
        <mesh scale={[radius, radius, radius]}>
            <sphereGeometry args={[1, 32, 32]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{ uColor: { value: new THREE.Color(color) } }}
                blending={THREE.AdditiveBlending}
                side={THREE.BackSide}
                transparent
                depthWrite={false}
            />
        </mesh>
    );
}