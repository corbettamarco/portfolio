import { Heading, Tab, VStack } from "@chakra-ui/react";
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
      borderBottomWidth="2.4px"
      alignSelf={'flex-end'}
      borderColor={"#1A191D"}
      onClick={() => setSelected(index)}
    >
      <VStack
        my="0.5em"
        _hover={{
          textShadow:
            " 0 0 1px #acfeff, 0 1px 2px #acfeff",
        }}
        spacing={1}
      >
        <Heading
          w={["75vw","75vw","15vw","15vw","15vw"]}
          fontSize={["1.5em", "1.5em", "1em", "1.2em", "1.5em"]}
          textColor={selected === index ? "portfolio.500" : "white"}
        >
          {singleTab.company}
        </Heading>
        
      </VStack>
    </Tab>
  );
};
