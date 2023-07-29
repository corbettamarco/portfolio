import { Heading, Link, Tab, Text, VStack } from "@chakra-ui/react";
import { JobType } from "../../Types/JobType";

type SingleTabProps = {
  singleTab: JobType;
  index: number;
  selected: number;
  setSelected: (tab: number) => void;
};

export const SingleTab = ({
  singleTab,
  index,
  selected,
  setSelected,
}: SingleTabProps) => {
  return (
    <Tab
      _selected={{
        bgColor: "transparent",
        borderBottomWidth: "2px",
        borderBottomColor: "portfolio.500",
      }}
      borderBottom="2px"
      borderColor={"#404040"}
      onClick={() => setSelected(index)}
    >
      <VStack
        my="0.5em"
        _hover={{
          textShadow:
            " 0 0 1px #7CDCB9, 1px -1px 2px #7CDCB9, 0 1px 4px #7CDCB9",
        }}
        spacing={1}
      >
        <Heading
          w="25vw"
          fontSize={"1.5em"}
          textColor={selected === index ? "portfolio.500" : "white"}
        >
          {singleTab.company}
        </Heading>
        
      </VStack>
    </Tab>
  );
};
