import { Link, Tooltip } from "@chakra-ui/react";
import "../../styles/logoStyles.css";
import { FaEnvelope } from 'react-icons/fa';

export const GmailLogo = () => {
  return (
    <Tooltip label="info@corbettamarco.com">
      <Link
        h="3rem"
        p=".5rem"
        justifyContent={"center"}
        _hover={{ textDecoration: "none", color: "white"}}
        borderColor={"red.400"}
        borderRadius={"md"}
        borderWidth={"2px"}
        className="linkLogo"
        fontSize={"2rem"}
        href="mailto:info@corbettamarco.com"
        target="_blank"
       color={'red.400'}
        ><FaEnvelope/></Link>
    </Tooltip>
  );
};
