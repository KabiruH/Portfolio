// components/Home/Type.js
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer",
          "Next.js Developer",
          "React Native Developer",
          "Mobile App Developer",
          "Freelance Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;