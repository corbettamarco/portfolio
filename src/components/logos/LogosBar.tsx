import React from "react";
import { LinkedinLogo } from "./LinkedinLogo";
import { GmailLogo } from "./GmailLogo";
import { HStack } from "@chakra-ui/react";

export const LogosBar = ({justify}: {justify: any}) => {
  return (
    <HStack justify={justify}>
      <LinkedinLogo /> <GmailLogo />
    </HStack>
  );
};
