import React from "react";

function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[-2, 4, -1]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}

export default RimLight;
