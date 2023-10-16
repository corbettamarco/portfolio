import {
  Box,
  Flex,
  Heading,
  Hide,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import "../../styles/scrollDown.css";
import { CustomTypeWriter } from "../CustomTypeWriter";
import { LogosBar } from "../logos/LogosBar";
import GetInTouchButton from "./GetInTouchButton";
export const AboveTheFold = () => {
  return (
    <>
      <VStack
        flexDirection={"column"}
        bgImage={"bgImage1.jpeg"}
        backgroundRepeat={"no-repeat"}
        bgSize={"cover"}
        w={"100vw"}
        overflowX={"clip"}
        h={["70vh", "95vh", "95vh", "95vh", "95vh"]}
      >
        <Flex
          backgroundColor={"rgba(0, 0, 0, 0.2)"}
          overflowX={"clip"}
          maxW="100%"
          justify={"space-evenly"}
          
          id="home"
          w={"100vw"}
        >
          <VStack>
            <Box
              zIndex={1}
              maxW="fit-content"
              h="fit-content"
              ml={["0", "0", "0", "7vw", "7vw"]}
              mt="4rem"
              p="2rem"
              textAlign="left"
              borderRadius={"md"}
              bgColor={"blackAlpha.500"}
            >
              <Heading
                maxW={"fit-content"}
                fontSize={["2rem", "4rem", "5rem", "6rem", "6rem"]}
              >
                <Text color={"portfolio.500"}>Marco </Text> Corbetta
              </Heading>
              <Box
                mx=".2rem"
                my=".5rem"
                fontSize={["1rem", "1.5rem", "1.8rem", "2rem", "2rem"]}
                color={"portfolio.200"}
              >
                <CustomTypeWriter />
                <Hide below="lg">{/* <Loader /> */}</Hide>
              </Box>
              <LogosBar />
            </Box>
            <GetInTouchButton />
          </VStack>
          <Hide below="lg">
            <Image
              src="me.png"
              zIndex="1"
              aspectRatio={1 / 1}
              maxH={"500px"}
              mt="5rem"
              p={{ lg: "2rem", xl: "0" }}
              float={"right"}
              position={"relative"}
              bottom={"0"}
              style={{ rotate: "20deg" }}
            />
          </Hide>
        </Flex>
        <Box zIndex={2} mt="2rem" position={"relative"}  id="test">
          <a href="#projects">
            <div className="scroll-down3" style={{boxShadow:"0px 0px 20px 8px white"}}>
              <FaAngleDown className="scroller" color="white" />
            </div>
          </a>
        </Box>
      </VStack>
      {/* <Image
          opacity={"0.5"}
          w="1500px"
          minW="full"
          h="95vh"
          objectFit={"cover"}
          src="bgImage1.jpeg"
          position={"absolute"}
          zIndex={0}
        /> */}
    </>
  );
};
