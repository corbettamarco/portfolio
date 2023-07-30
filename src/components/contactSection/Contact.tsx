"use client";

import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { z } from "zod";

/*const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};*/

const schema = z.object({
  name: z.string().min(1, { message: "First Name is required" }),
  mail: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "This is not a valid email." }),
  phone: z
    .string()
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      "Invalid Number!"
    )
    .optional(),
  message: z.string().optional(),
});

type Inputs = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <Box
      position={"relative"}
      bgGradient="linear(to-l, pink.600, #1A191D, portfolio.800)"
    >
      <Stack spacing={10} my="1rem" px="4vw">
        <Heading
          lineHeight={1.1}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            bgGradient="linear(to-r, portfolio.400,pink.400)"
            bgClip="text"
          >
            Let's get in touch!
          </Text>{" "}
        </Heading>
      </Stack>
      <Container minW="100%" py={{ base: 3, sm: 5, lg: 10 }}>
        <Center>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Contact Me
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, portfolio.400,pink.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Leave your contact here and I will answer ASAP
              </Text>
            </Stack>
            <Box as={"form"} mt={5} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel color={"gray.500"}>First name</FormLabel>

                  <InputGroup>
                    <InputLeftElement
                      color="gray.300"
                      fontSize="1.2em"
                      children={<FaUser />}
                    />

                    <Input
                      placeholder="First Name"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      {...register("name", { required: true })}
                    />
                  </InputGroup>
                </FormControl>
                <FormErrorMessage color={"red"}>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
                <FormControl isRequired>
                  <FormLabel color={"gray.500"}>Email</FormLabel>

                  <InputGroup>
                    <InputLeftElement
                      color="gray.300"
                      fontSize="1.2em"
                      children={<EmailIcon />}
                    />
                    <Input
                      placeholder="example@mail.io"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      {...register("mail", { required: true })}
                    />
                  </InputGroup>
                  <FormErrorMessage color={"red"}>
                    {errors.mail && errors.mail.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel color={"gray.500"}>Phone</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      color="gray.300"
                      fontSize="1.2em"
                      children={<PhoneIcon />}
                    />

                    <Input
                      placeholder="+39 (___) __-___-___"
                      bg={"gray.100"}
                      type="number"
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      {...register("phone", {
                        valueAsNumber: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.phone && errors.phone.message}
                    </FormErrorMessage>
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel color={"gray.500"}>Message</FormLabel>
                  <InputGroup>
                    <Textarea
                      placeholder="Your message..."
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      {...register("message")}
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, portfolio.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, portfolio.400,pink.400)",
                  boxShadow: "xl",
                }}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Center>
      </Container>
      {/*<Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(90px)" }}
      />*/}
    </Box>
  );
}
