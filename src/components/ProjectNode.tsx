"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import type { Project } from "@/data/projects";

function Geometry({ shape }: { shape: Project["shape"] }) {
  switch (shape) {
    case "torusKnot":
      return <torusKnotGeometry args={[0.9, 0.28, 128, 16]} />;
    case "octahedron":
      return <octahedronGeometry args={[1.2, 0]} />;
    case "dodecahedron":
      return <dodecahedronGeometry args={[1.1, 0]} />;
    case "icosahedron":
    default:
      return <icosahedronGeometry args={[1.2, 0]} />;
  }
}

export default function ProjectNode({
  project,
  color = "#c6f135",
}: {
  project: Project;
  color?: string;
}) {
  const ref = useRef<Mesh>(null);
  const speed = useRef(0.15 + Math.random() * 0.15);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed.current * 0.6;
    ref.current.rotation.y += delta * speed.current;
  });

  return (
    <group position={project.position}>
      <mesh ref={ref} castShadow receiveShadow>
        <Geometry shape={project.shape} />
        <meshStandardMaterial
          color={color}
          flatShading
          roughness={0.35}
          metalness={0.1}
          emissive={color}
          emissiveIntensity={0.12}
        />
      </mesh>
      {/* <Atmosphere color={color} radius={1.6} /> */}
    </group>
    // <mesh ref={ref} position={project.position} castShadow receiveShadow>
    //   <Geometry shape={project.shape} />
    //   <meshStandardMaterial
    //     color={color}
    //     flatShading
    //     roughness={0.35}
    //     metalness={0.1}
    //     emissive={color}
    //     emissiveIntensity={0.12}
    //   />
    // </mesh>
  );
}
