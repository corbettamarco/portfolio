import { CalendarIcon } from "@chakra-ui/icons";
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
  Wrap,
} from "@chakra-ui/react";
import { JobType } from "../../Types/JobType";
import "../../styles/wrapStyles.css";
import { ImLocation } from "react-icons/im";

export const SingleJob = ({ job }: { job: JobType }) => {
  return (
    <TabPanel my="1em" w="90vw" minH="30rem">
      <SimpleGrid
        columns={[1, 1, 2, 2, 2]}
        mt={[".0", "0", "0", "1em", "1em"]}
        textColor={"white"}
        w={"100%"}
        maxW={"80rem"}
        display={["block", "block", "flex", "flex", "flex"]}
        justifyContent={"center"}
        margin={"auto"}
        borderBottom={{lg:"2px solid white"}}
        pb="2rem"
        overflowX={"hidden"}
      >
        <VStack w={["100%", "100%", "50%", "50%", "50%"]} borderRight={{lg:"2px solid white"}}>
          <Image
            h={["3em", "4em", "5.5em", "8em", "8em"]}
            rounded={"lg"}
            src={job.img}
          />
          <Heading pt={"1rem"}>{job.company}</Heading>
          <Text
            color={"portfolio.500"}
            fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem", "1.5rem"]}
            textAlign={"center"}
          >
            {job.role}
          </Text>
          <HStack pt={"1rem"}>
            <CalendarIcon />
            <Text
              fontWeight={"bold"}
              fontSize={["1rem", "1rem", "1rem", "1.3rem", "1.3rem"]}
              minW="fit-content"
            >
              {job.dates}
            </Text>
          </HStack>
          <HStack>
            <ImLocation size={"1.5rem"} />
            <Text
              fontWeight={"bold"}
              fontSize={["1rem", "1rem", "1rem", "1.3rem", "1.3rem"]}
              minW="fit-content"
            >
              {job.location}
            </Text>
          </HStack>
          <Spacer />
        </VStack>
        <Box
          w={["100%", "100%", "50%", "50%", "50%"]}
          mt={["1rem", "1rem", "2rem", "2rem", "2rem"]}
        >
          <VStack pl={["1rem", "1rem","1rem","0rem","0rem"]}>
            <Text textAlign={['center','center','left','left','left']} fontWeight={"semibold"} maxW={["100%", "100%", "100%", "70%", "70%",]}>{job.desc}</Text>
            <Center>
              <Wrap w="100%" pt="2rem">
                {job.icons?.map((icon, index) => {
                  return (
                    <Box
                      m={'.5rem'}
                      fontSize={["4rem", "4rem", "4rem", "5rem", "5rem"]}
                      w={["4rem", "4rem", "4rem", "5rem", "5rem"]}
                      key={index}
                      maxH={"64px"}
                    >
                      {icon}
                    </Box>
                  );
                })}
              </Wrap>
            </Center>
          </VStack>
        </Box>
      </SimpleGrid>
    </TabPanel>
  );
};
