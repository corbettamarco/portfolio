import { Box, Heading, Wrap } from "@chakra-ui/react";
import React from "react";
import { Experience } from "./Experience";
import { projectsList } from "../projectsList";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Box zIndex={"2"} w="100%" bgColor={"#1A191D"} h="fit-content" id="projects">
      <Experience />
      <Box >
        <Heading fontSize={"4rem"} mt="1rem"  pl="7vw" >
          Projects
        </Heading>
        <Wrap spacing={"2rem"} my="2rem" py="1rem" pl="7vw" >
          {projectsList.map((project: any, index: number) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </Wrap>
      </Box>
    </Box>
  );
};
