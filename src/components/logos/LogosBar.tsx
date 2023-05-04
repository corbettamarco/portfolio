import React from "react";
import { LinkedinLogo } from "./LinkedinLogo";
import { GmailLogo } from "./GmailLogo";
import { HStack } from "@chakra-ui/react";
import { GitHubLogo } from "./GitHubLogo";

export const LogosBar = () => {
  return (
    <HStack justify={"space-evenly"} p="1rem" borderWidth={"1px"} borderColor={"portfolio.500"} borderRadius={"md"} mt="1rem" mx={"1rem"}>
      <LinkedinLogo /> <GmailLogo /><GitHubLogo/>
    </HStack>
  );
};
