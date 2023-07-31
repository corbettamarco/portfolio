import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./projectCard.css";
import { Tilt } from "react-tilt";
type PropsType = {
  project: any;
};

const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          5000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(0.25, 0.1, 0.25, 1.0)",    // Easing on enter/exit.
}

export const ProjectCard = ({ project }: PropsType) => {
  const [hover, setHover] = useState(false);
  return (
    <Tilt
    style={{
      transformStyle: 'preserve-3d',
    }} 
    options={defaultOptions}
  >
      <Card
      overflow={"hidden"}
      borderColor={project.isActive? "green" : "red"}
      borderWidth={"1px"}
        mx="1rem"
        _hover={{
          textDecoration: "none",
        }}
        h="300px"
        w="22rem"
        rounded={"md"}
        flexDirection={"row"}
        onMouseEnter={(e: React.MouseEvent) => setHover(true)}
        onMouseLeave={(e: React.MouseEvent) => setHover(false)}
        className="linkLogo" 
      >
        <Link
          _hover={{ textDecoration: "none" }}
          href={project.link}
          target="_blank"
          w={"full"}
          pointerEvents={!project.isActive ? "none" : "auto"}
          cursor={!project.isActive? "default" : "pointer"}
        >
          <CardBody overflow={"clip"} p="0">
            <Image
              // transform={hover ? "scale(1.10)" : ""}
              transition={hover ? "0.3s" : "0.3s"}
              roundedTop={"md"}
              src={project.image}
              borderTopRadius={"md"}
              background={"linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%)"}

            />
          </CardBody>

          <CardFooter
            roundedBottom={"md"}
            h="8.5rem"
            py=".5rem"
            bgColor={"#201F23"}
          >
            <Stack>
              <Text
                fontFamily={"Roboto, sans-serif"}
                fontWeight={"semibold"}
                fontSize={["1rem","1rem","1.3rem","1.3rem","1.3rem",]}
               >
                {project.title}
              </Text>
              <Box overflow={"hidden"} pb=".5rem" h="fit-content">
                <Box
                  h={"0"}
                  className={!hover ? "slide-out-top" : "slide-in-top"}
                >
                  {project.technologies.map(
                    (technology: any, index: number) => {
                      return (
                        <Tag p=".2rem" key={index} mx=".15rem" mb=".3rem" backgroundColor={'#18e1e3'}>
                          {technology}
                        </Tag>
                      );
                    }
                  )}
                </Box>
                <Text
                  className={!hover ? "slide-in-bottom" : "slide-out-bottom"}
                  opacity={".8"}
                  fontFamily={"Roboto, sans-serif"}
                >
                  {project.description}
                </Text>
              </Box>
            </Stack>
          </CardFooter>
        </Link>
      </Card>
    </Tilt>
  );
};
