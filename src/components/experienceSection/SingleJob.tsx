import { TimeIcon } from "@chakra-ui/icons";
import {
  ListItem,
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  Image,
  TabPanel,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { JobType } from "../../Types/JobType";

export const SingleJob = ({ job }: { job: JobType }) => {
  return (
    <TabPanel mx="1em" my="2em" w={["100vw", "100vw", "80vw"]} minW={"full"}>
      <Stack
        direction={["column", "column", "column", "row", "row"]}
        mt="1em"
        textColor={"white"}
        justifyContent={"space-evenly"}
      >
        <VStack justifyContent={"right"} pr={{ lg: "1em" }}>
          <Image
            mx="1em"
            
            h={["5em", "7.5em", "7.5em", "10em", "5em"]}
            rounded={"lg"}
            src={job.img}
          ></Image>
          <Heading>{job.company}</Heading>
          <Text color={"portfolio.500"}>{job.role}</Text>
          <Spacer />
          <HStack>
            <TimeIcon />
            <Text fontWeight={"bold"} fontSize="1.5em" minW="fit-content">
              {job.dates}
            </Text>
          </HStack>
          <Spacer />
        </VStack>
      </Stack>
    </TabPanel>
  );
};
