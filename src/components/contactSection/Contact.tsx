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
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { z } from "zod";
import emailjs from "@emailjs/browser";

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
      /^$|^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
      "Invalid Number!"
    )
    .optional(),
  message: z.string().optional(),
});

type Inputs = z.infer<typeof schema>;

export default function Contact() {
  const toast = useToast();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID
          ? process.env.REACT_APP_SERVICE_ID
          : "",
        process.env.REACT_APP_TEMPLATE_ID
          ? process.env.REACT_APP_TEMPLATE_ID
          : "",
        data,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result: any) => {
          toast({
            title: `Message Sent`,
            status: "success",
            isClosable: true,
          });
          reset();
        },
        (error: any) => {
          toast({
            title: `Error` + error,
            status: "error",
            isClosable: true,
          });
        }
      );
  };
  return (
    <Box
      id="contacts"
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
            bgColor={"#1A191D"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            w="70vw"
            maxW={'40rem'}
          >
            <Stack spacing={4}>
              <Heading
                bgGradient={"linear(to-l, portfolio.400,pink.400)"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                bgClip="text"
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
            <Center>
            <Box as={"form"} mt={5} onSubmit={handleSubmit(onSubmit)} w='50vw' maxW={'30rem'}>
              <Stack spacing={4}>
                <FormControl
                  isRequired
                  isInvalid={errors?.name ? true : false}
                  h="6rem"
                >
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
                      {...register("name", {
                        required: "This is required",
                      })}
                      name="name"
                    />
                  </InputGroup>
                  <FormErrorMessage color={"red"}>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  isInvalid={errors?.mail ? true : false}
                  h="6rem"
                >
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
                      {...register("mail", {
                        required: "This is required",
                      })}
                      name="mail"
                    />
                  </InputGroup>
                  <FormErrorMessage color={"red"}>
                    {errors.mail && errors.mail.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors?.phone ? true : false} h="6rem">
                  <FormLabel color={"gray.500"}>Phone</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      color="gray.300"
                      fontSize="1.2em"
                      children={<PhoneIcon />}
                    />
                    <Input
                      placeholder="+39 ________________"
                      bg={"gray.100"}
                      type="number"
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      {...register("phone")}
                      name="phone"
                    />
                  </InputGroup>
                  <FormErrorMessage color={"red"}>
                    {errors.phone && errors.phone.message}
                  </FormErrorMessage>
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
                      name="message"
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
            </Center>
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
