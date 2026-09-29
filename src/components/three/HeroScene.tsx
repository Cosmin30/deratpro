"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdditiveBlending,
  BufferAttribute,
  DataTexture,
  DynamicDrawUsage,
  LinearFilter,
  RGBAFormat,
  type Group,
  type LineSegments,
  type Mesh,
  type MeshBasicMaterial,
  type Points,
} from "three";
import { useEffect, useMemo, useRef, useState } from "react";

const PARTICLE_COUNT = 72;

type NetworkData = {
  basePositions: Float32Array;
  particlePositions: Float32Array;
  phases: Float32Array;
  speeds: Float32Array;
  amplitudes: Float32Array;
  connections: Uint16Array;
  linePositions: Float32Array;
};

function createNetwork(): NetworkData {
  let seed = 27;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const basePositions = new Float32Array(PARTICLE_COUNT * 3);
  const phases = new Float32Array(PARTICLE_COUNT * 3);
  const speeds = new Float32Array(PARTICLE_COUNT * 3);
  const amplitudes = new Float32Array(PARTICLE_COUNT * 3);

  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    const offset = i * 3;
    basePositions[offset] = (random() - 0.5) * 3.8;
    basePositions[offset + 1] = (random() - 0.5) * 3.8;
    basePositions[offset + 2] = (random() - 0.5) * 1.7;

    for (let axis = 0; axis < 3; axis += 1) {
      phases[offset + axis] = random() * Math.PI * 2;
      speeds[offset + axis] = 0.45 + random() * 0.45;
      amplitudes[offset + axis] = 0.09 + random() * 0.1;
    }
  }

  const connectionPairs: number[] = [];
  const maxDistanceSquared = 1.25 * 1.25;

  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    const neighbors: { index: number; distance: number }[] = [];
    for (let j = i + 1; j < PARTICLE_COUNT; j += 1) {
      const dx = basePositions[i * 3] - basePositions[j * 3];
      const dy = basePositions[i * 3 + 1] - basePositions[j * 3 + 1];
      const dz = basePositions[i * 3 + 2] - basePositions[j * 3 + 2];
      const distance = dx * dx + dy * dy + dz * dz;
      if (distance < maxDistanceSquared) neighbors.push({ index: j, distance });
    }

    neighbors.sort((a, b) => a.distance - b.distance);
    for (const neighbor of neighbors.slice(0, 2)) {
      connectionPairs.push(i, neighbor.index);
    }
  }

  const particlePositions = basePositions.slice();
  const connections = new Uint16Array(connectionPairs);
  const linePositions = new Float32Array(connections.length * 3);

  return {
    basePositions,
    particlePositions,
    phases,
    speeds,
    amplitudes,
    connections,
    linePositions,
  };
}

function createGlowTexture() {
  const size = 32;
  const pixels = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = ((x + 0.5) / size) * 2 - 1;
      const dy = ((y + 0.5) / size) * 2 - 1;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const alpha = Math.pow(Math.max(0, 1 - distance), 2.4);
      const offset = (y * size + x) * 4;
      pixels[offset] = 255;
      pixels[offset + 1] = 255;
      pixels[offset + 2] = 255;
      pixels[offset + 3] = Math.round(alpha * 255);
    }
  }

  const texture = new DataTexture(pixels, size, size, RGBAFormat);
  texture.magFilter = LinearFilter;
  texture.minFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function ParticleNetwork({ reducedMotion }: { reducedMotion: boolean }) {
  const networkRef = useRef<Group>(null);
  const coreRef = useRef<Group>(null);
  const pointsRef = useRef<Points>(null);
  const linesRef = useRef<LineSegments>(null);
  const scanWaveRef = useRef<Mesh>(null);
  const scanWaveMaterialRef = useRef<MeshBasicMaterial>(null);
  const elapsedTime = useRef(0);
  const network = useMemo(() => createNetwork(), []);
  const particlePositionsRef = useRef(network.particlePositions);
  const linePositionsRef = useRef(network.linePositions);
  const glowTexture = useMemo(() => createGlowTexture(), []);

  useEffect(() => () => glowTexture.dispose(), [glowTexture]);

  useFrame(({ pointer }, delta) => {
    const motionScale = reducedMotion ? 0.4 : 1;
    elapsedTime.current += delta * motionScale;
    const time = elapsedTime.current;
    const { basePositions, phases, speeds, amplitudes } = network;
    const particlePositions = particlePositionsRef.current;
    const linePositions = linePositionsRef.current;

    for (let i = 0; i < particlePositions.length; i += 1) {
      particlePositions[i] =
        basePositions[i] +
        Math.sin(time * speeds[i] + phases[i]) * amplitudes[i] * motionScale;
    }

    const pointAttribute = pointsRef.current?.geometry.getAttribute("position");
    if (pointAttribute instanceof BufferAttribute) pointAttribute.needsUpdate = true;

    for (let edge = 0; edge < network.connections.length; edge += 1) {
      const particleIndex = network.connections[edge];
      linePositions[edge * 3] = particlePositions[particleIndex * 3];
      linePositions[edge * 3 + 1] = particlePositions[particleIndex * 3 + 1];
      linePositions[edge * 3 + 2] = particlePositions[particleIndex * 3 + 2];
    }

    const lineAttribute = linesRef.current?.geometry.getAttribute("position");
    if (lineAttribute instanceof BufferAttribute) lineAttribute.needsUpdate = true;

    const waveProgress = (time % 4.8) / 4.8;
    if (scanWaveRef.current) {
      scanWaveRef.current.scale.setScalar(0.55 + waveProgress * 1.1);
    }
    if (scanWaveMaterialRef.current) {
      scanWaveMaterialRef.current.opacity = (1 - waveProgress) * 0.24;
    }

    const ease = 1 - Math.exp(-delta * 1.4 * motionScale);
    if (networkRef.current) {
      const driftY = Math.sin(time * 0.25) * 0.06;
      const driftX = Math.cos(time * 0.21) * 0.035;
      networkRef.current.rotation.y +=
        (pointer.x * 0.1 + driftY - networkRef.current.rotation.y) * ease;
      networkRef.current.rotation.x +=
        (-pointer.y * 0.07 + driftX - networkRef.current.rotation.x) * ease;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.28;
      coreRef.current.rotation.x = Math.sin(time * 0.35) * 0.12;
      coreRef.current.scale.setScalar(1 + Math.sin(time * 1.1) * 0.05 * motionScale);
    }
  });

  return (
    <group ref={networkRef}>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[network.linePositions, 3]}
            usage={DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial
          blending={AdditiveBlending}
          color="#1689a7"
          depthWrite={false}
          opacity={0.38}
          transparent
        />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[network.particlePositions, 3]}
            usage={DynamicDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial
          alphaTest={0.015}
          blending={AdditiveBlending}
          color="#53d9f2"
          depthWrite={false}
          map={glowTexture}
          opacity={0.9}
          size={0.115}
          sizeAttenuation
          transparent
        />
      </points>

      <mesh ref={scanWaveRef} rotation={[0.1, 0.06, 0]}>
        <torusGeometry args={[1, 0.012, 5, 96]} />
        <meshBasicMaterial
          ref={scanWaveMaterialRef}
          blending={AdditiveBlending}
          color="#24b8d7"
          depthWrite={false}
          opacity={0.24}
          toneMapped={false}
          transparent
        />
      </mesh>

      <group ref={coreRef}>
        <mesh>
          <icosahedronGeometry args={[0.56, 1]} />
          <meshBasicMaterial color="#2563eb" opacity={0.52} transparent wireframe />
        </mesh>
        <mesh rotation={[0.45, 0.3, 0.2]}>
          <icosahedronGeometry args={[0.43, 1]} />
          <meshBasicMaterial color="#22d3ee" opacity={0.62} transparent wireframe />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.25, 20, 20]} />
          <meshBasicMaterial color="#10b981" opacity={0.78} transparent />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <Canvas
      aria-label="DDD protection network with a moving treatment pulse"
      camera={{ fov: 45, near: 0.1, far: 30, position: [0, 0, 5.2] }}
      dpr={[1, 1.25]}
      fallback={<div aria-hidden="true" className="h-full w-full bg-primary" />}
      frameloop="always"
      gl={{ alpha: false, antialias: false, powerPreference: "low-power" }}
    >
      <color attach="background" args={["#0f172a"]} />
      <ParticleNetwork reducedMotion={reducedMotion} />
    </Canvas>
  );
}
