import { Box, Flex, Heading, Hide, Image, Text } from "@chakra-ui/react";
import { CustomTypeWriter } from "../CustomTypeWriter";
import { LogosBar } from "../logos/LogosBar";
export const AboveTheFold = () => {
  return (
    <>
      <Flex
        overflowX={"clip"}
        maxW="100%"
        justify={"space-between"}
        h="95vh"
        id="home"
        backgroundRepeat={"no-repeat"}
        bgSize={"cover"}
        justifyContent={["center", "center", "center", "left", "left"]}
      >
        <Image
          opacity={"0.5"}
          w="1500px"
          minW="full"
          h="95vh"
          objectFit={"cover"}
          src="bgImage1.jpeg"
          position={"absolute"}
          zIndex={0}
        />
        <Box
          zIndex={1}
          maxW="fit-content"
          h="fit-content"
          ml={["7vw"]}
          mt="7rem"
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
          <Text
            mx=".2rem"
            my=".5rem"
            fontSize={["1rem", "1.5rem", "1.8rem", "2rem", "2rem"]}
            color={"portfolio.200"}
          >
            <CustomTypeWriter />
            <Hide below="lg">
              {/* <Loader /> */}
            </Hide>
          </Text>
          <LogosBar />
        </Box>
        <Hide below="lg">
          <Image
            src="http://follio-react.wpocean.com/static/media/hero-shape.84c5ca49.png"
            zIndex="1"
            minW={"510px"}
            w="600px"
            h="574px"
            minH={"574px"}
            right={"2rem"}
            position={"fixed"}
            bottom={"0"}
          />
        </Hide>
      </Flex>
    </>
  );
};
