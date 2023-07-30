import { Code, Link } from '@chakra-ui/react'

export const SidebarName = () => {
  return (
    <Code
          bgColor={"transparent"}
          fontWeight={"bold"}
          fontSize={["1.3rem","1.8rem","2rem","2rem","2rem","2rem",]}
          p="1rem"
          pl="2.5rem"
          mt={[".4rem","0","0","0","0","0"]}
          display={"block"}
          textColor={"portfolio.500"}
          ml={{  base: "2rem", md: "0" }}
          _hover={{ opacity: "0.5", textDecoration: "none" }}
          as={Link}
          href="#home"
        >
          MarcoCorbetta._
        </Code>
  )
}
