import { Box, HStack, Heading, Tag, Wrap } from "@chakra-ui/react";
import { projectsList } from "../projectsList";
import { ProjectCard } from "./projectCard/ProjectCard";

export const Projects = () => {
  return (
    <Box
      zIndex={"2"}
      w="100%"
      bgColor={"#1A191D"}
      h="fit-content"
      id="projects"
      boxShadow="0 30px 40px 40px rgba(0,0,0,.1)"

    >
      <Box>
        <Heading
          fontSize={["3rem", "3rem", "4rem", "4rem", "4rem", "4rem"]}
          mt="1rem"
          px="4vw"
        >
          Projects
        </Heading>
        <HStack px="4vw" mt="1rem">
          <Tag colorScheme={"green"}> Demo Available</Tag>
          <Tag colorScheme={"red"}> Demo Not Available</Tag>
        </HStack>
        <Wrap justify={"center"} spacing={"2rem"} my="2rem" mx="2rem" p="1rem">
          {projectsList.map((project: any, index: number) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </Wrap>
      </Box>
    </Box>
  );
};
