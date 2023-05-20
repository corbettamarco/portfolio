import { Link, Tooltip } from "@chakra-ui/react";
import "../../styles/logoStyles.css";
import { FaGithub } from "react-icons/fa";

export const GitHubLogo = () => {
  return (
    <Tooltip label="https://github.com/corbettamarco/corbettamarco">
      <Link
        h="3rem"
        p=".5rem"
        justifyContent={"center"}
        _hover={{ textDecoration: "none", color: "white", borderColor:"white" }}
        borderColor={"black"}
        borderRadius={"md"}
        borderWidth={"2px"}
        fontSize={"2rem"}
        className="linkLogo"
        href="https://github.com/corbettamarco/corbettamarco"
        target="_blank"
        color={"black"}
      ><FaGithub/></Link>
    </Tooltip>
  );
};
