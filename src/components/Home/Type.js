import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Frontend Developer",
          "Backend Developer",
          "Open Source Contributor"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
