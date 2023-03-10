import React from "react";
import underConstruction from "../../../../src/Assets/underconstruction.png";

function CooperateHomepage() {
  return (
    <div
      style={{
        // backgroundImage: `url(${underConstruction})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto"
      }}
    >
      <img src={underConstruction} alt="waah"/>
    </div>
  );
}

export default CooperateHomepage;
