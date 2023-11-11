import { Box, HStack, Hide } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { debounce } from "../utils/debounce";
import { SidebarContent } from "./sidebarComponents/SidebarContent";
import { SidebarName } from "./sidebarComponents/SidebarName";

export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Box
      position={"fixed"}
      style={{ ...navbarStyles, top: visible ? "0" : "-80px" }}
    >
      <HStack>
        <SidebarName />
        <Hide below="md">
          <SidebarContent/>
        </Hide>
      </HStack>
    </Box>
  );
};

const navbarStyles = {
  height: "5rem",
  width: "100%",
  transition: "top 0.6s",
  zIndex: "999",
  backgroundColor: "rgb(0,0,0,0.4)",
  backdropFilter: "blur(10px)",
};
