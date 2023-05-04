import { Link, Tooltip } from "@chakra-ui/react";
import "../../styles/logoStyles.css";

export const GitHubLogo = () => {
  return (
    <Tooltip label="https://github.com/corbettamarco/corbettamarco">
      <Link
        w="3rem"
        h="3rem"
        justifyContent={"center"}
        _hover={{ textDecoration: "none", color: "white", borderColor:"white" }}
        borderColor={"black"}
        borderRadius={"md"}
        borderWidth={"2px"}
        className="fa fa-github linkLogo"
        fontSize={"2.5rem"}
        href="https://github.com/corbettamarco/corbettamarco"
        target="_blank"
        pl=".3rem"
        pt=".25rem"
        mt="1rem"
        color={"black"}
      />
    </Tooltip>
  );
};
