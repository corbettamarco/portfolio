import { Hide, Spacer } from "@chakra-ui/react";
import {
  Sidebar,
  SidebarOverlay,
  SidebarSection,
  SidebarToggleButton,
} from "@saas-ui/sidebar";
import { LogosBar } from "../logos/LogosBar";
import { SidebarContent } from "./SidebarContent";

export const CustomSidebar = () => {
  return (
    <Hide above="md">
      <Sidebar
        position={"fixed"}
        transition="width"
        transitionDuration="normal"
        w={"15rem"}
        bgColor={"rgba(0,0,0,0.6)"}
      >
        <SidebarOverlay />
        <SidebarSection mt={"2rem"}>
          <SidebarToggleButton mt={".5rem"} />
          <SidebarContent />
        </SidebarSection>
        <Spacer />
        <SidebarSection bgColor={"black"} w="15rem" py="1rem">
          <LogosBar justify={"space-evenly"}/>
        </SidebarSection>
      </Sidebar>
    </Hide>
  );
};
