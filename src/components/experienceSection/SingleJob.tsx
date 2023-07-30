import { TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  TabPanel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { JobType } from "../../Types/JobType";
import { IconType } from "react-icons/lib";
import { JsxElement } from "typescript";
import { ReactElement, ReactNode } from "react";

export const SingleJob = ({ job }: { job: JobType }) => {
  return (
    <TabPanel my="1em" w="90vw" minH="30rem">
      <SimpleGrid
        columns={[1, 1, 2, 2, 2]}
        mt="1em"
        textColor={"white"}
        w={"100%"}
        display={["block", "block", "flex", "flex", "flex"]}
      >
        <VStack w={["100%", "100%", "50%", "50%", "50%"]}>
          <Image
            h={["5em", "7.5em", "7.5em", "10em", "5em"]}
            rounded={"lg"}
            src={job.img}
          ></Image>
          <Heading>{job.company}</Heading>
          <Text color={"portfolio.500"}>{job.role}</Text>
          <Spacer />
          <HStack>
            <TimeIcon />
            <Text fontWeight={"bold"} fontSize="1.2m" minW="fit-content">
              {job.dates}
            </Text>
          </HStack>
          <Spacer />
        </VStack>
        <Box
          w={["100%", "100%", "50%", "50%", "50%"]}
          mt={["1rem", "1rem", "2rem", "2rem", "2rem"]}
        >
          <VStack>
            <Text>{job.desc}</Text>
            <Center>
              <HStack w="100%" justifyContent={"left"} pt="1rem" gap={"1rem"}>
                {job.icons?.map((icon, index) => {
                  return (
                    <Box fontSize={"5rem"} w="5rem" key={index}>
                      {icon}
                    </Box>
                  );
                })}
              </HStack>
            </Center>
          </VStack>
        </Box>
      </SimpleGrid>
    </TabPanel>
  );
};
