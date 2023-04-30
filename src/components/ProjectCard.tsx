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
import "./../styles/projectCard.css";
type PropsType = {
  project: any;
};
export const ProjectCard = ({ project }: PropsType) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Card
        mx="1rem"
        _hover={{
          textDecoration: "none",
        }}
        h="fit-content"
        w="22rem"
        rounded={"md"}
        flexDirection={"row"}
        onMouseEnter={(e: React.MouseEvent) => setHover(true)}
        onMouseLeave={(e: React.MouseEvent) => setHover(false)}
      >
        <Link
          _hover={{ textDecoration: "none" }}
          href={project.link}
          target="_blank"
          w={"full"}
        >
          <CardBody overflow={"clip"} p="0">
            <Image
              transform={hover ? "scale(1.10)" : ""}
              transition={hover ? "0.3s" : "0.3s"}
              roundedTop={"md"}
              src={project.image}
            />
          </CardBody>

          <CardFooter
            roundedBottom={"md"}
            h="8rem"
            py=".5rem"
            bgColor={"#201F23"}
          >
            <Stack>
              <Text
                fontFamily={"Roboto, sans-serif"}
                fontWeight={"semibold"}
                fontSize={"1.3rem"}
              >
                {project.title}
              </Text>
              <Box overflow={"hidden"}>
                <Box
                  h={"0"}
                  className={!hover ? "slide-out-top" : "slide-in-top"}
                >
                  {project.technologies.map(
                    (technology: any, index: number) => {
                      return (
                        <Tag p=".2rem" key={index} mx=".15rem" mb=".3rem">
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
    </>
  );
};
