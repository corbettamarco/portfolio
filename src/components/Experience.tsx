import { Box, HStack, Hide, Text } from "@chakra-ui/react";
export const Experience = () => {
  return (
    <Hide below="md">
      <Box
        bg={
          " linear-gradient(90deg, rgba(210,143,53,0.8) 0%, rgba(212,78,78,0.8) 81%)"
        }
        position={"absolute"}
        zIndex={"5"}
        top="52%"
        right={"15%"}
        boxSize={"14rem"}
        float={"right"}
        rounded={"lg"}
        p=".5rem"
      >
        <HStack m=".2rem"  border="dashed 2px ">
          <Text  fontSize={"8rem"}>
            1
          </Text>
          <Text fontSize={"1.2rem"} fontWeight={"light"}>
            Year Experience
          </Text>
        </HStack>
      </Box>
    </Hide>
  );
};
