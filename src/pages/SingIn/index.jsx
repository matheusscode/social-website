import { useState } from "react";
import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Image,
  Checkbox,
  keyframes,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import backgroundImg from "../../../public/assets/__images/bg.svg.svg";

export default function SingIn() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const pan = keyframes`
  100% {background-position: 15% 50%}
`;
  const animation = `${pan} 6s infinite alternate linear`;

  return (
    <Flex
      display="grid"
      placeItems="center"
      animation={animation}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage={backgroundImg}
      h="100vh"
    >
      <Box display="flex" flexDirection="column" m="8% auto">
        <Box
          zIndex={1}
          m={isLargerThan1000 ? "0 auto" : "90px 0"}
          borderRadius="25px"
          boxShadow="0 0 15px #686868"
          p="40px"
          bgColor="aliceblue"
        >
          <Box w="400px">
            <Text
              textAlign={isLargerThan1000 ? "left" : "center"}
              mb="25px"
              color="#3C3C3C"
              fontSize="2rem"
              fontWeight="700"
            >
              <Image src="../../../public/assets/__images/globaldev-logo.png" />
            </Text>
            <Text
              textAlign="left"
              fontSize="1.8rem"
              fontWeight="600"
              mb="20px"
              color="#1C0051"
            >
              Log in
            </Text>
            <Box>
              <FormControl
                justifyContent="center"
                display="flex"
                flexDirection="column"
              >
                <FormLabel color="#555151" fontSize="1rem" mb="10px">
                  Email
                </FormLabel>
                <Input
                  mb="15px"
                  type="email"
                  placeholder="Enter you Email"
                  boxShadow="0 0 2px #404040"
                />
                <FormLabel color="#555151" fontSize="1rem" mb="10px">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    mb="10px"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    boxShadow="0 0 2px #404040"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                      color="#555151"
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Box w="165px" mb="20px">
                  <Link>
                    <Text color="#0044a9" fontSize="0.9rem">
                      Forgot your password?
                    </Text>
                  </Link>
                </Box>

                <Checkbox w="120px" mb="25px" defaultChecked>
                  Rember me
                </Checkbox>

                <Button
                  w="320px"
                  m="0 auto"
                  fontSize="1.4rem"
                  p="25px"
                  color="aliceblue"
                  bgColor="#006bdd"
                  _hover={{ bgColor: "#0151a6" }}
                >
                  Acessar
                </Button>
                <Text
                  textAlign="center"
                  mt="30px"
                  fontWeight="600"
                  color="#0044a9"
                  fontSize="0.9rem"
                  _hover={{ textDecoration: "underline" }}
                >
                  <Link to="/register">
                    Don't have an account? Register Now.
                  </Link>
                </Text>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
