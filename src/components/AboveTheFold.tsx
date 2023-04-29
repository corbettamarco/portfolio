import { Box, Flex, Heading, Hide, Image, Text } from "@chakra-ui/react";
import { LogosBar } from "./logos/LogosBar";
import { CustomTypeWriter } from "./CustomTypeWriter";
export const AboveTheFold = () => {
  return (
    <>
      <Flex justify={"space-between"} h="90vh" id="home" backgroundRepeat={"no-repeat"} maxW="100%">
        <Box
          maxW="fit-content"
          h="fit-content"
          ml={["7vw"]}
          pt="7rem"
          textAlign="left"
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
          </Text>
          <LogosBar justify={""} />
        </Box>
        <Hide below="lg">
          <Image
            src="http://follio-react.wpocean.com/static/media/hero-shape.84c5ca49.png"
            zIndex="1"
            minW={"510px"}
            w="600px"
            h="574px"
            minH={"574px"}
            ml="-7rem"
            mr="2rem"
            mt="5rem"
          />
        </Hide>
      </Flex>
    </>
  );
};
