import { Link, Tooltip } from "@chakra-ui/react";
import "../../styles/logoStyles.css";

export const LinkedinLogo = () => {
  return (
    <Tooltip label="Linkedin - Corbetta Marco">
      <Link
        w="3rem"
        h="3rem"
        p=".5rem"
        _hover={{ textDecoration: "none", color: "linkedin.200" }}
        color={"linkedin.500"}
        borderColor={"linkedin.500"}
        borderRadius={"md"}
        borderWidth={"2px"}
        ml=".2rem"
        className="fa fa-linkedin linkLogo"
        fontSize={"2rem"}
        href="https://www.linkedin.com/in/marco-corbetta/"
        target="_blank"
      />
    </Tooltip>
  );
};
