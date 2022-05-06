import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Tv(url) {
  const { nodes } = useGLTF("tv.gltf");

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <group rotation={[Math.PI / 9, Math.PI * 1.2, 0]}>
      <mesh geometry={nodes.TV.geometry} position={[-2, 2, 2]}>
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh rotation={[0, 0, 0]} position={[0, 0, 1.1]}>
        <planeGeometry args={[3.2, 1.9]} />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

export default Tv;
