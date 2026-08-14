//Scene.tsx
"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, Sphere, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import CameraRig from "./CameraRig";
import ProjectNode from "./ProjectNode";
import { projects } from "@/data/projects";
import { scrollState } from "@/lib/scrollState";
import Nebula from "./Nebula";
import SpaceDust from "./SpaceDust";

function Comet() {
  const ref = useRef<THREE.Mesh>(null);

  const lookCurve = useMemo(() => {
    const points = projects.map((p) => new THREE.Vector3(...p.position));
    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.4);
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const t = THREE.MathUtils.clamp(scrollState.progress, 0, 1);
    const point = lookCurve.getPointAt(t);
    ref.current.position.copy(point);
  });

  return (
    <Trail width={1.4} length={5} color="#c6f135" attenuation={(w) => w}>
      <Sphere ref={ref} args={[0.08, 16, 16]}>
        <meshBasicMaterial color="#c6f135" toneMapped={false} />
      </Sphere>
    </Trail>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      gl={{ antialias: true }}
      camera={{ fov: 45, near: 0.1, far: 100, position: [0, 1.4, 4] }}
    >
      <color attach="background" args={["#150F1C"]} />
      <fog attach="fog" args={["#150F1C", 8, 26]} />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, -2, -4]} intensity={0.5} color="#ff6f59" />

      <Nebula />
      <Stars radius={90} depth={50} count={2500} factor={2.5} fade speed={0.25} />
      <Stars radius={35} depth={20} count={900} factor={1.2} fade speed={0.6} />
      <SpaceDust />

      {projects.map((p, i) => (
        <ProjectNode
          key={p.id}
          project={p}
          color={i % 2 === 0 ? "#c6f135" : "#ff6f59"}
        />
      ))}

      <Comet />
      <CameraRig />

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.25} luminanceSmoothing={0.9} mipmapBlur />
        <Vignette eskil={false} offset={0.15} darkness={0.7} />
      </EffectComposer>
    </Canvas>
  );
}
