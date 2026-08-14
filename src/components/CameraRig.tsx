//CameraRing.tsx
"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollState";
import { projects } from "@/data/projects";

export default function CameraRig() {
  const { camera } = useThree();
  const lookTarget = useRef(new THREE.Vector3());

  // Curva suave passando perto de cada projeto, com a câmera um pouco
  // afastada e acima para nunca colidir com os nós.
  const curve = useMemo(() => {
    const points = projects.map(
      (p) => new THREE.Vector3(p.position[0] * 0.6, p.position[1] + 1.4, p.position[2] + 4)
    );
    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.4);
  }, []);

  const lookCurve = useMemo(() => {
    const points = projects.map((p) => new THREE.Vector3(...p.position));
    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.4);
  }, []);

  useFrame((state, delta) => {
    const t = THREE.MathUtils.clamp(scrollState.progress, 0, 1);

    const camPoint = curve.getPointAt(t);
    const lookPoint = lookCurve.getPointAt(t);

    // leve parallax do mouse: sensação de estar numa nave, não numa trilha fixa
    const mouseOffset = new THREE.Vector3(
      state.pointer.x * 0.4,
      state.pointer.y * 0.25,
      0
    );

    const damp = 1 - Math.pow(0.001, delta);
    camera.position.lerp(camPoint, damp);
    lookTarget.current.lerp(lookPoint.clone().add(mouseOffset), damp);
    camera.lookAt(lookTarget.current);

    const idx = Math.round(t * (projects.length - 1));
    if (idx !== scrollState.activeIndex) {
      scrollState.activeIndex = idx;
    }
  });

  return null;
}
