/* eslint-disable react/jsx-no-comment-textnodes */
import { Code, Link } from "@chakra-ui/react";
import { useState } from "react";

export const SidebarContent = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <>
      <Code
        style={{ ...codeStyles }}
        as={Link}
        href="#home"
        onMouseEnter={() => setSelected(1)}
        onMouseLeave={() => setSelected(0)}
        color={selected === 1 ? "portfolio.500" : "white"}
        opacity={selected !==0 && selected !==1 ? "0.5" : "1" }

      >
        // home
      </Code>
      <Code
        style={{ ...codeStyles }}
        as={Link}
        href="#projects"
        onMouseEnter={() => setSelected(2)}
        onMouseLeave={() => setSelected(0)}
        color={selected === 2 ? "portfolio.500" : "white"}
        opacity={selected !==0 && selected !==2 ? "0.5" : "1" }
      >
        //projects
      </Code>
    </>
  );
};

const codeStyles = {
  backgroundColor: "transparent",
  fontWeight: "bold",
  padding: "1rem",
  paddingLeft: "2rem",
  display: "block",
  textDecoration: "none",
};
