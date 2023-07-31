import { Box, Heading, Wrap, Text, HStack } from "@chakra-ui/react";
import { projectsList } from "./projectsList";
import { ProjectCardRgb } from "./projectCard/ProjectCardRgb";

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
        <HStack>
          <Heading
            fontSize={["2.5rem", "2.5rem", "3rem", "4rem", "4rem", "4rem"]}
            mt="1rem"
            px="4vw"
          >
            Projects
            <Text fontSize={"sm"} mt='1rem' fontWeight={'medium'} color={'yellow.400'}>
            Please allow a few seconds for the applications to spin up when
            opened
          </Text>
          </Heading>
         
        </HStack>
        <Wrap justify={"center"} spacing={"2rem"} my="2rem" mx={["0","1rem","2rem","2rem","2rem",]} p="1rem" style={{overflowX: 'clip'}}>
          {projectsList.map((project: any, index: number) => {
            return <ProjectCardRgb key={index} project={project} />;
          })}
        </Wrap>
      </Box>
    </Box>
  );
};
