import { Link, Tooltip } from "@chakra-ui/react";
import "../../styles/logoStyles.css";

export const GmailLogo = () => {
  return (
    <Tooltip label="corbettamarco.it@gmail.com">
      <Link
        w="3rem"
        h="3rem"
        justifyContent={"center"}
        _hover={{ textDecoration: "none", color: "red.300"}}
        borderColor={"red.500"}
        borderRadius={"md"}
        borderWidth={"2px"}
        className="fa fa-envelope linkLogo"
        fontSize={"2rem"}
        href="mailto:corbettamarco.it@gmail.com"
        target="_blank"
        pl=".4rem"
        pt=".5rem"
        mt="1rem"
      />
    </Tooltip>
  );
};
