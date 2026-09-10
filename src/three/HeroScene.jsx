import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ── Animated Core Sphere ── */
function CoreSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.4, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00b8cc"
          attach="material"
          distort={0.35}
          speed={2.5}
          roughness={0.08}
          metalness={0.9}
          emissive="#003a45"
          emissiveIntensity={0.4}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

/* ── Orbiting Particles ── */
function OrbitRing({ radius, count, color, speed, tilt }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      pts.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      ));
    }
    return pts;
  }, [radius, count]);

  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed;
      groupRef.current.rotation.x = tilt;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((pt, i) => (
        <mesh key={i} position={pt}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Neural Network Lines ── */
function NeuralLines() {
  const linesRef = useRef();
  const positions = useMemo(() => {
    const pts = [];
    const nodeCount = 12;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3
      ));
    }
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.5) {
          pts.push(nodes[i].x, nodes[i].y, nodes[i].z);
          pts.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return new Float32Array(pts);
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.3;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={linesRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00f5ff" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

/* ── Floating Node Dots ── */
function FloatingNodes() {
  const nodes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3 - 1,
      ],
      color: i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? '#a855f7' : '#f59e0b',
      size: 0.05 + Math.random() * 0.08,
      speed: 0.3 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  return (
    <>
      {nodes.map((node, i) => (
        <FloatingNode key={i} {...node} />
      ))}
    </>
  );
}

function FloatingNode({ position, color, size, speed, offset }) {
  const ref = useRef();
  const baseY = position[1];

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = baseY + Math.sin(state.clock.elapsedTime * speed + offset) * 0.3;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

/* ── Main Hero Scene ── */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00f5ff" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#a855f7" />
      <pointLight position={[0, -5, -5]} intensity={0.5} color="#f59e0b" />

      <Stars radius={80} depth={40} count={800} factor={4} saturation={0} fade speed={0.5} />

      <NeuralLines />
      <CoreSphere />

      <OrbitRing radius={2.4} count={40} color="#00f5ff" speed={0.006} tilt={0.2} />
      <OrbitRing radius={3.2} count={55} color="#a855f7" speed={-0.004} tilt={0.8} />
      <OrbitRing radius={3.9} count={30} color="#f59e0b" speed={0.003} tilt={1.3} />

      <FloatingNodes />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        rotateSpeed={0.4}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}
