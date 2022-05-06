import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
function Camera() {
  //   const scene = useRef();
  //   useFrame(() => {
  //     scene.current.rotation.y += 0.02;
  //     scene.current.rotation.y -= 0.03;
  //   });

  return (
    <>
      {/* <group ref={scene}> */}
      <PerspectiveCamera fov={75} makeDefault position={[0, 5, 10]} />;
      {/* </group> */}
    </>
  );
}

export default Camera;
