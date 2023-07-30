/* eslint-disable react/jsx-no-comment-textnodes */
import { Code, Link } from "@chakra-ui/react";
import { useState } from "react";

export const SidebarContent = () => {
  const [selected, setSelected] = useState<number | undefined>(0);
  const sections=[{
    href:"#home",
    text:"// home"
  },
  {
    href:"#projects",
    text:"// projects"
  },
  {
    href:"#experience",
    text:"// experience"
  },
  {
    href:"#contacts",
    text:"// contacts"
  }
]

  return (
    <>
    {sections.map((section, index )=>{
      return(
      <Code
        key={index}
        style={{ ...codeStyles }}
        as={Link}
        href={section.href}
        onMouseEnter={() => setSelected(index)}
        onMouseLeave={() => setSelected(undefined)}
        color={selected === index ? "portfolio.500" : "white"}
        opacity={(selected || selected===0) && selected !==index ? "0.5" : "1" }
        mt={'1rem'}
      >
        
        {section.text}
      </Code>)
    })}
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
