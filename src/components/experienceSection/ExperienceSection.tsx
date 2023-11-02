import {
  Center,
  Flex,
  HStack,
  Heading,
  TabList,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { JobType } from "../../Types/JobType";
import { SingleJob } from "./SingleJob";
import { SingleTab } from "./SingleTab";
import { jobs } from "./jobs";

export const ExperienceSection = () => {
  const [selected, setselected] = useState<number>(0);
  return (
    <>
      <HStack id="experience">
        <Heading
          fontSize={["2.5rem", "2.5rem", "3rem", "4rem", "4rem", "4rem"]}
          mt="1rem"
          px="4vw"
        >
          Experience
          <Text fontSize={["md","md","md","lg","lg","xl"]} mt='1rem' fontWeight={'semibold'} color={'yellow.400'}>
            Click on each tab to see the corresponding experience
            opened
          </Text>
        </Heading>
      </HStack>
      <Center my="2rem">
      <Tabs variant={"line"}>
        <Center >
          <TabList borderBottomWidth={"0"}>
            <Flex
              direction={["column", "column", "row", "row"]}
              textAlign={'center'}
            >
              {jobs &&
                jobs.map((singleTab: JobType, index: number) => {
                  return (
                    <SingleTab
                      singleTab={singleTab}
                      index={index}
                      key={"singleTab" + index}
                      selected={selected}
                      setSelected={setselected}
                    />
                  );
                })}
            </Flex>
          </TabList>
        </Center>
       
          <TabPanels>
            {jobs &&
              jobs.map((job: JobType, index: number) => {
                return <SingleJob job={job} key={"singleJob" + index} />;
              })}
          </TabPanels>
          
      </Tabs>
      </Center>
    </>
  );
};
