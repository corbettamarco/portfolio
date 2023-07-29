import {
  Tabs,
  Center,
  TabList,
  Flex,
  TabPanels,
  List,
  TabPanel,
} from "@chakra-ui/react";
import { useState } from "react";
import { SingleTab } from "./SingleTab";
import { SingleJob } from "./SingleJob";
import { JobType } from "../../Types/JobType";

const jobs: JobType[] = [
  {
    company: "RefactorMi",
    dates: "06/2022 - 05/2023",
    role: "Front End Developer",
    img: "refactormi.png",
  },
  {
    company: "Tod's SPA",
    dates: "05/2023 - 07/2023",
    role: "Email Campaign Developer",
    img: "tods.png",
  },
];

export const ExperienceSection = () => {
  const [selected, setselected] = useState<number>(0);
  return (
    <Tabs variant={"line"}>
      <Center>
        <TabList borderBottomWidth={"0"}>
          <Flex
            minW={["90vw", "90vw", "auto", "auto"]}
            direction={["column", "column", "row", "row"]}
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
            return <SingleJob job={job} key={"singleDay" + index} />;
          })}
      </TabPanels>
    </Tabs>
  );
};
