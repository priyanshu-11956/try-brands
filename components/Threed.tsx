"use client"; // Required for Next.js

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const { scene } = useGLTF("/Animation.glb"); // Replace with your GLB file path
  const modelRef = useRef<any>(null);

  useEffect(() => {
    if (!modelRef.current) return;

    // Scroll-based animation using GSAP
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2, // Rotate 360° on Y-axis
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return <primitive ref={modelRef} object={scene} scale={1} />;
}

export default function Animation() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
