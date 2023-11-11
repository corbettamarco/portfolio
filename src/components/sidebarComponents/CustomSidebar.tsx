import { Hide, Spacer, useDisclosure } from "@chakra-ui/react";
import {
  Sidebar,
  SidebarOverlay,
  SidebarSection,
  SidebarToggleButton,
} from "@saas-ui/sidebar";
import { LogosBar } from "../logos/LogosBar";
import { SidebarContent } from "./SidebarContent";

export const CustomSidebar = () => {

  const {onClose, isOpen, onOpen}=useDisclosure();

  return (
    <Hide above="md">
      <Sidebar
        position={"fixed"}
        transition="width"
        transitionDuration="normal"
        w={"15rem"}
        bgColor={"rgba(0,0,0,0.6)"}
        isOpen={isOpen}
        onClick={isOpen? onClose: onOpen}
      >
        <SidebarOverlay/>
        <SidebarSection mt={"2rem"}>
          <SidebarToggleButton mt={".5rem"} _hover={{backgroundColor:"rgb(24, 225, 227,0.4)", backdropFilter:"blur(10px)"}} bgColor={'portfolio.500'} color={'#1A191D'}/>
          <SidebarContent />
        </SidebarSection>
        <Spacer />
        <SidebarSection  w="15rem" py="1rem">
          <LogosBar />
        </SidebarSection>
      </Sidebar>
    </Hide>
  );
};
