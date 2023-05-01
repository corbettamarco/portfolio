import { Box, Heading, Wrap } from "@chakra-ui/react";
import { projectsList } from "../projectsList";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Box
      zIndex={"2"}
      w="100%"
      bgColor={"#1A191D"}
      h="fit-content"
      id="projects"
    >
      <Box>
        <Heading
          fontSize={["3rem", "3rem", "4rem", "4rem", "4rem", "4rem"]}
          mt="1rem"
          px="4vw"
        >
          Projects
        </Heading>
        <Wrap justify={"center"} spacing={"2rem"} my="2rem" mx="2rem">
          {projectsList.map((project: any, index: number) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </Wrap>
      </Box>
    </Box>
  );
};
