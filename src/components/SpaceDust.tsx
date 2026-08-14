"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollState";

const COUNT = 400;

export default function SpaceDust() {
    const ref = useRef<THREE.Points>(null);
    const prevProgress = useRef(0);

    const positions = useMemo(() => {
        const arr = new Float32Array(COUNT * 3);
        for (let i = 0; i < COUNT; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 20;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
            arr[i * 3 + 2] = -Math.random() * 30;
        }
        return arr;
    }, []);

    useFrame(() => {
        if (!ref.current) return;
        const velocity = (scrollState.progress - prevProgress.current) * 400;
        prevProgress.current = scrollState.progress;

        const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < COUNT; i++) {
            let z = posAttr.getZ(i) + velocity * 0.5;
            if (z > 4) z = -30;
            if (z < -30) z = 4;
            posAttr.setZ(i, z);
        }
        posAttr.needsUpdate = true;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.5} sizeAttenuation />
        </points>
    );
}