import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

// Create 3D Scene
const scene = new THREE.Scene();

// 1. Trophy Base (Pedestal)
const baseGeo = new THREE.CylinderGeometry(1.2, 1.5, 0.6, 32);
const goldMat = new THREE.MeshStandardMaterial({
  color: 0xF59E0B,
  metalness: 0.9,
  roughness: 0.15,
});
const baseMesh = new THREE.Mesh(baseGeo, goldMat);
baseMesh.position.y = -1.2;
scene.add(baseMesh);

// 2. Trophy Stem
const stemGeo = new THREE.CylinderGeometry(0.3, 0.4, 0.8, 32);
const stemMesh = new THREE.Mesh(stemGeo, goldMat);
stemMesh.position.y = -0.5;
scene.add(stemMesh);

// 3. Trophy Cup (Lathe Geometry)
const points = [];
for (let i = 0; i <= 10; i++) {
  const t = i / 10;
  const radius = 0.4 + Math.pow(t, 1.8) * 1.0;
  const y = t * 1.8;
  points.push(new THREE.Vector2(radius, y));
}
const cupGeo = new THREE.LatheGeometry(points, 32);
const cupMesh = new THREE.Mesh(cupGeo, goldMat);
cupMesh.position.y = -0.1;
scene.add(cupMesh);

// 4. Handles (Left and Right)
const handleGeo = new THREE.TorusGeometry(0.6, 0.1, 16, 32, Math.PI);

const leftHandle = new THREE.Mesh(handleGeo, goldMat);
leftHandle.position.set(-1.1, 0.8, 0);
leftHandle.rotation.z = Math.PI / 2;
scene.add(leftHandle);

const rightHandle = new THREE.Mesh(handleGeo, goldMat);
rightHandle.position.set(1.1, 0.8, 0);
rightHandle.rotation.z = -Math.PI / 2;
scene.add(rightHandle);

// 5. Star Ornament on top
const starShape = new THREE.Shape();
const outerRadius = 0.5;
const innerRadius = 0.25;
const numPoints = 5;

for (let i = 0; i < numPoints * 2; i++) {
  const r = (i % 2 === 0) ? outerRadius : innerRadius;
  const angle = (i / (numPoints * 2)) * Math.PI * 2 - Math.PI / 2;
  const x = Math.cos(angle) * r;
  const y = Math.sin(angle) * r;
  if (i === 0) starShape.moveTo(x, y);
  else starShape.lineTo(x, y);
}
starShape.closePath();

const extrudeSettings = { depth: 0.15, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.04, bevelThickness: 0.04 };
const starGeo = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
const starMesh = new THREE.Mesh(starGeo, goldMat);
starMesh.position.set(0, 1.8, -0.075);
scene.add(starMesh);

// Export to GLB
const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (gltf) => {
    const outputBuffer = Buffer.from(gltf);
    const outputPath = path.resolve('public/trophy.glb');
    fs.writeFileSync(outputPath, outputBuffer);
    console.log(`SUCCESS: Generated 3D trophy GLB model at ${outputPath} (${outputBuffer.length} bytes)`);
  },
  (error) => {
    console.error('An error occurred during GLTF export:', error);
  },
  { binary: true }
);
