import React from "react";
import underConstruction from "../../../../src/Assets/underconstruction.png";

function WeddingHomepage() {
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

export default WeddingHomepage;
