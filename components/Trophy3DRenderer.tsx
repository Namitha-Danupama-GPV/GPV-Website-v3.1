"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Trophy3DRendererProps {
  modelPath?: string;
  className?: string;
}

export default function Trophy3DRenderer({
  modelPath = "/arunangshubanerjee-battery-1795.glb",
  className = "w-full h-[400px] sm:h-[480px] md:h-[540px]",
}: Trophy3DRendererProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 4.6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true, // Transparent backdrop
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    // Empty container and append canvas
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting for Metallic Shading & Depth
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    mainKeyLight.position.set(5, 8, 6);
    scene.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0x00FF66, 2.5);
    fillLight.position.set(-5, 4, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xF59E0B, 3.0);
    rimLight.position.set(0, -5, -4);
    scene.add(rimLight);

    // Top Highlight Light for cap detail
    const topLight = new THREE.DirectionalLight(0xffffff, 2.0);
    topLight.position.set(0, 8, 2);
    scene.add(topLight);

    // Pivot group to rotate centered model with slight 3D showcase tilt
    const pivotGroup = new THREE.Group();
    pivotGroup.rotation.x = 0.18; // Slight forward tilt to reveal 3D top cap
    pivotGroup.rotation.z = -0.05; // Elegant slight side angle
    scene.add(pivotGroup);

    // Load custom .glb model file
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        // Clear previous children
        while (pivotGroup.children.length > 0) {
          pivotGroup.remove(pivotGroup.children[0]);
        }

        const loadedModel = gltf.scene;

        // Compute exact bounding box and center point
        const box = new THREE.Box3().setFromObject(loadedModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Re-align geometry origin to exact center
        loadedModel.position.set(-center.x, -center.y, -center.z);

        // Normalize scale to make 3D model significantly bigger and vertically prominent
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const targetScale = 3.6 / maxDim;
        pivotGroup.scale.set(targetScale, targetScale, targetScale);

        pivotGroup.add(loadedModel);
      },
      undefined,
      (error) => {
        console.warn("GLTF model failed to load:", error);
      }
    );

    // Slower continuous 3D rotation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (pivotGroup) {
        pivotGroup.rotation.y += 0.006; // Smooth, slow 3D rotation
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [modelPath]);

  return <div ref={containerRef} className={`${className} flex items-center justify-center relative z-20`} />;
}
