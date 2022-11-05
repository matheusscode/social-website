import { Flex, Box, Container } from "@chakra-ui/react";
import Contacts from "../../components/Contacts";
import Feed from "../../components/Feed";
import Trend from "../../components/Trend";
import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

  return (
    <Flex flexDirection="column" pt="60px">
      <Box minHeight={isLargerThan720 ? "64px" : "0px"} />
      <main height="100vh" p="24px">
        <Container maxW="auto">
          <Box display="flex" justifyContent="center">
            <Trend />
            <Feed />
            <Contacts />
          </Box>
        </Container>
      </main>
    </Flex>
  );
}
