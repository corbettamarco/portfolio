import { Box, Image, Link, Stack, Tag, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import "./projectCard.css";
import "./projectCardRgb.css";
import { projectColors } from "../projectsList";

type PropsType = {
  key: number;
  project: any;
};

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 5000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1.0)", // Easing on enter/exit.
};


export const ProjectCardRgb = ({ project }: PropsType) => {
  const [hover, setHover] = useState(false);
  return (
    <Tilt
      style={{
        transformStyle: "preserve-3d",
      }}
      options={defaultOptions}
    >
      <Box
        onMouseEnter={(e: React.MouseEvent) => setHover(true)}
        onMouseLeave={(e: React.MouseEvent) => setHover(false)}
        overflow={"hidden"}
      >
        <Link
          _hover={{ textDecoration: "none" }}
          href={project.link}
          target="_blank"
          pointerEvents={!project.isActive ? "none" : "auto"}
          cursor={!project.isActive ? "default" : "pointer"}
        >
          <Box
            className="card rgb"
            gridTemplateColumns={["17rem", "20rem", "22rem", "22rem", "22rem"]}
          >
            <Image className="card-image" src={project.image} />
            <div className="card-text ">
              <Box ml="-.2rem">
                {project.isActive === true ? (
                  <Tag colorScheme={"green"}> Demo Available</Tag>
                ) : (
                  <Tag colorScheme={"red"}> Demo Not Available</Tag>
                )}
              </Box>
              <Box roundedBottom={"md"} py=".5rem">
                <Stack>
                  <Text
                    fontFamily={"Roboto, sans-serif"}
                    fontWeight={"semibold"}
                    fontSize={"1.3rem"}
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
                            <Tag
                              p=".3rem"
                              key={index}
                              mx=".15rem"
                              mb=".3rem"
                              mt=".1rem"
                              bgGradient={
                                projectColors.find(
                                  (tech) =>
                                    tech.technology === technology
                                )?.color
                              }
                              bgColor={
                                projectColors.find(
                                  (tech) =>
                                    tech.technology === technology
                                )?.color
                              }
                              fontWeight={'semibold'}
                              fontFamily={"Roboto, sans-serif"}

                            >
                              {technology}
                            </Tag>
                          );
                        }
                      )}
                    </Box>
                    <Text
                      className={
                        !hover ? "slide-in-bottom" : "slide-out-bottom"
                      }
                      opacity={".8"}
                      fontFamily={"Roboto, sans-serif"}
                    >
                      {project.description}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </div>
          </Box>
        </Link>
      </Box>
    </Tilt>
  );
};
