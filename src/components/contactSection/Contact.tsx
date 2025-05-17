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
  HStack,
  Heading,
  Hide,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaUser } from "react-icons/fa";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import Globe from "./Globe";
import { useEffect } from "react";

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
      /^$|^\+?[0-9\s\-()]{7,}$/,
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

  useEffect(() => {
  const pubKey = process.env.REACT_APP_PUBLIC_KEY;
  if (pubKey) {
    // Initialize the SDK with your Public Key
    emailjs.init(pubKey);
  } else {
    console.error(
      "[EmailJS] Missing REACT_APP_PUBLIC_KEY. Visit https://dashboard.emailjs.com/admin/account"
    );
  }
}, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
  const serviceID = process.env.REACT_APP_SERVICE_ID!;
  const templateID = process.env.REACT_APP_TEMPLATE_ID!;

  if (!serviceID || !templateID) {
    toast({
      title: "Configuration Error",
      description:
        "Email service is not configured correctly. Please contact the site administrator.",
      status: "error",
      isClosable: true,
    });
    return;
  }

  try {
    const resp = await emailjs.send(serviceID, templateID, data);
    toast({ title: "Message Sent", status: "success", isClosable: true });
    reset();
  } catch (err: any) {
    console.error("[EmailJS] Error:", err);
    const errMsg =
      typeof err.text === "string"
        ? err.text
        : err.message || "An unexpected error occurred.";
    toast({
      title: "Failed to Send",
      description: errMsg,
      status: "error",
      isClosable: true,
    });
  }
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
          fontSize={["2.5rem", "2.5rem", "3rem", "4rem", "4rem", "4rem"]}
        >
          <Text
            as={"span"}
            bgGradient="linear(to-r, portfolio.400,pink.400)"
            bgClip="text"
          >
            Let's get in touch!
          </Text>
        </Heading>
      </Stack>
      <Center>
        <HStack minW="100%" justifyContent={'center'} py={{ base: 2, sm: 4, lg: 5 }}>
          <Box mb="5rem">
            <Hide below="lg">
              <Globe />
            </Hide>
          </Box>
          <Stack
            bgColor={"#1A191D"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            w="42vw"
            maxW={"40rem"}
            minW={['18rem','20rem','22rem','22rem','22rem']}
            m="1rem"
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
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }} mb={'1rem'}>
                Leave your contacts here and I will answer ASAP
              </Text>
            </Stack>
            <Center>
              <Box
                as={"form"}
                onSubmit={handleSubmit(onSubmit)}
                w="50vw"
                minW={['16rem','18rem','20rem','20rem','20rem']}
                maxW={"30rem"}
              >
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

                  <FormControl
                    isInvalid={errors?.phone ? true : false}
                    h="6rem"
                  >
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
                        type="tel"
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
        </HStack>
      </Center>
      {/*<Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(90px)" }}
      />*/}
    </Box>
  );
}


