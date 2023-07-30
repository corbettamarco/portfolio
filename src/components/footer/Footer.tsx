import {
  Box,
  ButtonGroup,
  Stack,
  Text
} from "@chakra-ui/react";
import { GitHubLogo } from "../logos/GitHubLogo";
import { GmailLogo } from "../logos/GmailLogo";
import { LinkedinLogo } from "../logos/LinkedinLogo";

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    py={{ base: "6", md: "8" }}
    backgroundColor="rgb(0,0,0,0.4)"
    backdropFilter="blur(10px)"
    zIndex={"5"}
    w={"100%"}
    p="2rem"
    borderTop={"1px solid"}
    borderColor={"portfolio.500"}
  >
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
        <ButtonGroup spacing={{ base: "1rem", md: "2rem" }}>
          <LinkedinLogo />
          <GmailLogo />
          <GitHubLogo />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle" fontStyle={"italic"}>
        &copy; {new Date().getFullYear()} Marco Corbetta, All rights reserved.
      </Text>
    </Stack>
  </Box>
);
