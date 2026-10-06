"use client";

import { useRef, useEffect } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
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
  const isDragging = useRef(false);
  const previousPointer = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!ref.current) return;
    
    // Only apply automatic rotation if not currently interacting with the object
    if (!isDragging.current) {
      ref.current.rotation.x += delta * speed.current * 0.6;
      ref.current.rotation.y += delta * speed.current;
    }
  });

  useEffect(() => {
    const handlePointerMoveGlobal = (e: PointerEvent) => {
      if (!isDragging.current || !ref.current) return;
      
      const deltaX = e.clientX - previousPointer.current.x;
      const deltaY = e.clientY - previousPointer.current.y;

      const sensitivity = 0.008;
      const maxDelta = 0.5;

      const rotY = Math.max(-maxDelta, Math.min(maxDelta, deltaX * sensitivity));
      const rotX = Math.max(-maxDelta, Math.min(maxDelta, deltaY * sensitivity));

      ref.current.rotation.y += rotY;
      ref.current.rotation.x += rotX;

      previousPointer.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUpGlobal = () => {
      isDragging.current = false;
    };

    window.addEventListener("pointermove", handlePointerMoveGlobal);
    window.addEventListener("pointerup", handlePointerUpGlobal);
    window.addEventListener("pointercancel", handlePointerUpGlobal);

    return () => {
      window.removeEventListener("pointermove", handlePointerMoveGlobal);
      window.removeEventListener("pointerup", handlePointerUpGlobal);
      window.removeEventListener("pointercancel", handlePointerUpGlobal);
    };
  }, []);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    isDragging.current = true;
    previousPointer.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <group position={project.position}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        onPointerDown={handlePointerDown}
      >
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
    </group>
  );
}
