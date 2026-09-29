import fs from 'fs';
import path from 'path';

// Construct a metallic gold 3D Trophy Cup mesh in binary GLB 2.0 format
function createTrophyGLB() {
  const vertices = [];
  const normals = [];
  const indices = [];

  // Helper to add vertex
  function addVertex(x, y, z, nx, ny, nz) {
    vertices.push(x, y, z);
    const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
    normals.push(nx / len, ny / len, nz / len);
    return (vertices.length / 3) - 1;
  }

  // 1. Pedestal Base
  const baseR = 1.4;
  const baseH = 0.5;
  const segments = 24;

  for (let i = 0; i < segments; i++) {
    const a1 = (i / segments) * Math.PI * 2;
    const a2 = ((i + 1) / segments) * Math.PI * 2;

    const x1 = Math.cos(a1) * baseR;
    const z1 = Math.sin(a1) * baseR;
    const x2 = Math.cos(a2) * baseR;
    const z2 = Math.sin(a2) * baseR;

    // Base cylinder side quad
    const v0 = addVertex(x1, -1.2, z1, x1, 0, z1);
    const v1 = addVertex(x2, -1.2, z2, x2, 0, z2);
    const v2 = addVertex(x2, -1.2 + baseH, z2, x2, 0, z2);
    const v3 = addVertex(x1, -1.2 + baseH, z1, x1, 0, z1);

    indices.push(v0, v1, v2, v0, v2, v3);
  }

  // 2. Trophy Cup Body (Lathe curve)
  const cupPoints = [
    { r: 0.3, y: -0.7 },
    { r: 0.25, y: -0.3 },
    { r: 0.5, y: 0.2 },
    { r: 0.9, y: 0.8 },
    { r: 1.1, y: 1.4 },
  ];

  for (let p = 0; p < cupPoints.length - 1; p++) {
    const p1 = cupPoints[p];
    const p2 = cupPoints[p + 1];

    for (let i = 0; i < segments; i++) {
      const a1 = (i / segments) * Math.PI * 2;
      const a2 = ((i + 1) / segments) * Math.PI * 2;

      const cos1 = Math.cos(a1), sin1 = Math.sin(a1);
      const cos2 = Math.cos(a2), sin2 = Math.sin(a2);

      const v0 = addVertex(cos1 * p1.r, p1.y, sin1 * p1.r, cos1, 0.2, sin1);
      const v1 = addVertex(cos2 * p1.r, p1.y, sin2 * p1.r, cos2, 0.2, sin2);
      const v2 = addVertex(cos2 * p2.r, p2.y, sin2 * p2.r, cos2, 0.2, sin2);
      const v3 = addVertex(cos1 * p2.r, p2.y, sin1 * p2.r, cos1, 0.2, sin1);

      indices.push(v0, v1, v2, v0, v2, v3);
    }
  }

  // Convert to buffers
  const posBuffer = new Float32Array(vertices);
  const normBuffer = new Float32Array(normals);
  const idxBuffer = new Uint16Array(indices);

  // Compute bounding box
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < vertices.length; i += 3) {
    minX = Math.min(minX, vertices[i]);
    minY = Math.min(minY, vertices[i + 1]);
    minZ = Math.min(minZ, vertices[i + 2]);
    maxX = Math.max(maxX, vertices[i]);
    maxY = Math.max(maxY, vertices[i + 1]);
    maxZ = Math.max(maxZ, vertices[i + 2]);
  }

  const posByteLength = posBuffer.byteLength;
  const normByteLength = normBuffer.byteLength;
  const idxByteLength = idxBuffer.byteLength;

  // Align buffers
  const binLength = posByteLength + normByteLength + idxByteLength;
  const binBuffer = Buffer.alloc(binLength);

  let offset = 0;
  Buffer.from(idxBuffer.buffer).copy(binBuffer, offset);
  offset += idxByteLength;

  Buffer.from(posBuffer.buffer).copy(binBuffer, offset);
  const posOffset = offset;
  offset += posByteLength;

  Buffer.from(normBuffer.buffer).copy(binBuffer, offset);
  const normOffset = offset;

  const gltfJSON = {
    asset: { version: "2.0", generator: "GPV Trophy Builder" },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0, name: "GoldTrophyMesh" }],
    materials: [
      {
        name: "GoldMaterial",
        pbrMetallicRoughness: {
          baseColorFactor: [0.96, 0.68, 0.12, 1.0],
          metallicFactor: 0.9,
          roughnessFactor: 0.15,
        },
      },
    ],
    meshes: [
      {
        name: "TrophyMesh",
        primitives: [
          {
            attributes: { POSITION: 1, NORMAL: 2 },
            indices: 0,
            material: 0,
          },
        ],
      },
    ],
    accessors: [
      {
        bufferView: 0,
        byteOffset: 0,
        componentType: 5123, // UNSIGNED_SHORT
        count: indices.length,
        type: "SCALAR",
        min: [0],
        max: [vertices.length / 3 - 1],
      },
      {
        bufferView: 1,
        byteOffset: 0,
        componentType: 5126, // FLOAT
        count: vertices.length / 3,
        type: "VEC3",
        min: [minX, minY, minZ],
        max: [maxX, maxY, maxZ],
      },
      {
        bufferView: 2,
        byteOffset: 0,
        componentType: 5126, // FLOAT
        count: normals.length / 3,
        type: "VEC3",
      },
    ],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: idxByteLength, target: 34963 },
      { buffer: 0, byteOffset: posOffset, byteLength: posByteLength, target: 34962 },
      { buffer: 0, byteOffset: normOffset, byteLength: normByteLength, target: 34962 },
    ],
    buffers: [{ byteLength: binLength }],
  };

  const jsonString = JSON.stringify(gltfJSON);
  let jsonBuffer = Buffer.from(jsonString, 'utf8');

  // Pad jsonBuffer to multiple of 4 with space (0x20)
  const jsonPadding = (4 - (jsonBuffer.length % 4)) % 4;
  if (jsonPadding > 0) {
    jsonBuffer = Buffer.concat([jsonBuffer, Buffer.alloc(jsonPadding, 0x20)]);
  }

  // Pad binBuffer to multiple of 4 with 0x00
  const binPadding = (4 - (binBuffer.length % 4)) % 4;
  let finalBinBuffer = binBuffer;
  if (binPadding > 0) {
    finalBinBuffer = Buffer.concat([binBuffer, Buffer.alloc(binPadding, 0x00)]);
  }

  const totalLength = 12 + 8 + jsonBuffer.length + 8 + finalBinBuffer.length;
  const glbBuffer = Buffer.alloc(totalLength);

  // 12-byte GLB Header
  glbBuffer.writeUInt32LE(0x46545367, 0); // Magic: "glTF"
  glbBuffer.writeUInt32LE(2, 4);          // Version 2
  glbBuffer.writeUInt32LE(totalLength, 8); // Total length

  // Chunk 0: JSON
  glbBuffer.writeUInt32LE(jsonBuffer.length, 12);
  glbBuffer.writeUInt32LE(0x4E4F534A, 16); // Chunk type: "JSON"
  jsonBuffer.copy(glbBuffer, 20);

  // Chunk 1: BIN
  const binHeaderOffset = 20 + jsonBuffer.length;
  glbBuffer.writeUInt32LE(finalBinBuffer.length, binHeaderOffset);
  glbBuffer.writeUInt32LE(0x00414E49, binHeaderOffset + 4); // Chunk type: "BIN\0"
  finalBinBuffer.copy(glbBuffer, binHeaderOffset + 8);

  const outputPath = path.resolve('public/trophy.glb');
  fs.writeFileSync(outputPath, glbBuffer);
  console.log(`SUCCESS: Created valid 3D golden trophy GLB model at ${outputPath} (${glbBuffer.length} bytes)`);
}

createTrophyGLB();
