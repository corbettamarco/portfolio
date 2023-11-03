import {
    Box,
    HStack,
    Heading,
    Show,
    Text,
    VStack,
    Wrap
} from "@chakra-ui/react";
import { HiDesktopComputer } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { IoMdApps } from "react-icons/io";
import ServiceGlobe from "./ServiceGlobe";
export const Services = () => {
  return (
    <Box my="2rem">
      <HStack>
        <Heading
          fontSize={["2.5rem", "2.5rem", "3rem", "4rem", "4rem", "4rem"]}
          px="4vw"
        >
          Services
        </Heading>
      </HStack>
      <Box m="2rem">
        <VStack mt={"2rem"} spacing={"2rem"}>
          <Wrap justifyContent={"space-between"} alignItems={"stretch"} >
            <Box border="2px solid #BA4BBC" borderRadius={"5px"} shadow={"2xl"} w={'60vw'}>
              <HStack
                fontSize={[
                  "1rem",
                  "1.5rem",
                  "1.5rem",
                  "2rem",
                  "2rem",
                  "2rem",
                ]}
                spacing={"0"}
                borderBottom="2px solid #BA4BBC"
                p="1rem"
                gap={"1rem"}
                justifyContent={'space-between'}
              >
                <FaRocket />

                <Text
                  borderLeft={"2px solid #BA4BBC"}
                  fontWeight={"bold"}
                  px={"1rem"}
                  w={'100%'}
                  textAlign={'right'}
                  pl={'.5rem'}
                >
                  Websites Development
                </Text>
              </HStack>
              <Text fontSize={'1.2rem'} textAlign={'center'}  p="1rem">
                Development of custom websites using CMSs, React or plain HTML
                and CSS.
              </Text>
            </Box>
            <Show above="lg">
              <Box justifyContent={"center"} pointerEvents={"none"}>
                <ServiceGlobe />
              </Box>
            </Show>
          </Wrap>
          <Wrap justifyContent={"space-between"} alignItems={"stretch"}>
            <Show above="lg">
              <Box justifyContent={"center"} pointerEvents={"none"} fontSize={'200px'} style={{color:'#00C080'}}>
                <HiDesktopComputer />
              </Box>
            </Show>
            <Box border="2px solid #00C080" borderRadius={"5px"} shadow={"2xl"} w={'60vw'}>
              <HStack
                fontSize={[
                  "1rem",
                  "1.5rem",
                  "1.5rem",
                  "2rem",
                  "2rem",
                  "2rem",
                ]}
                spacing={"0"}
                borderBottom="2px solid #00C080"
                p="1rem"
                gap={"1rem"}
                justifyContent={'space-between'}
              >
                

                <Text
                  borderRight={"2px solid #00C080"}
                  fontWeight={"bold"}
                  px={"1rem"}
                  w='100%'
                  pr={'.5rem'}
                >
                  WebApps Development
                </Text>
                <IoMdApps />
              </HStack>
              <Text fontSize={'1.2rem'} p="1rem" textAlign={'center'} margin={'auto'}>
                Development of Front End and Back End of modern WebApps.
              </Text>
            </Box>
          </Wrap>
        </VStack>
      </Box>
    </Box>
  );
};
