import { Flex, Box, Container } from "@chakra-ui/react";
import Contacts from "../../components/Contacts";
import Feed from "../../components/Feed";
import Trend from "../../components/Trend";

export default function Home() {
  return (
    <Flex flexDirection="column" pt="60px">
      <Box minHeight="64px" />
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
