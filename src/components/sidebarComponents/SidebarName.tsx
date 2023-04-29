import { Code, Link } from '@chakra-ui/react'

export const SidebarName = () => {
  return (
    <Code
          bgColor={"transparent"}
          fontWeight={"bold"}
          fontSize={"2rem"}
          p="1rem"
          pl="2rem"
          display={"block"}
          textColor={"portfolio.500"}
          ml={{  base: "2rem", md: "0" }}
          _hover={{ opacity: "0.5", textDecoration: "none" }}
          as={Link}
          href="/"
        >
          MarcoCorbetta._
        </Code>
  )
}
