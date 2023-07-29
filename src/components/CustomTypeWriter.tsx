import React from "react";
import TypewriterComponent from "typewriter-effect";

export const CustomTypeWriter = () => {
  return (
    <TypewriterComponent
      options={{
        strings: ["Fullstack Developer", "Based in Milan"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
