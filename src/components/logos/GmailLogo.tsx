import { Link, Tooltip } from "@chakra-ui/react";
import "../../styles/logoStyles.css";
import { FaEnvelope } from 'react-icons/fa';

export const GmailLogo = () => {
  return (
    <Tooltip label="corbettamarco.it@gmail.com">
      <Link
        h="3rem"
        p=".5rem"
        justifyContent={"center"}
        _hover={{ textDecoration: "none", color: "red.300"}}
        borderColor={"red.500"}
        borderRadius={"md"}
        borderWidth={"2px"}
        className="linkLogo"
        fontSize={"2rem"}
        href="mailto:corbettamarco.it@gmail.com"
        target="_blank"
       
        ><FaEnvelope/></Link>
    </Tooltip>
  );
};
