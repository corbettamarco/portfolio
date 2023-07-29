import { Link, Tooltip } from "@chakra-ui/react";
import "../../styles/logoStyles.css";
import { FaLinkedinIn } from 'react-icons/fa';
export const LinkedinLogo = () => {
  return (
    <Tooltip label="Linkedin - Corbetta Marco">
      <Link
        h="3rem"
        p=".5rem"
        _hover={{ textDecoration: "none", color: "linkedin.100",  borderColor:"linkedin.500" }}
        color={"linkedin.500"}
        borderColor={"linkedin.500"}
        borderRadius={"md"}
        borderWidth={"2px"}
        fontSize={"2rem"}
        className="linkLogo"
        href="https://www.linkedin.com/in/marco-corbetta/"
        target="_blank"
      ><FaLinkedinIn/></Link>
    </Tooltip>
  );
};
