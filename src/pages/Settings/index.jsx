import { Box, Flex, Container } from "@chakra-ui/react";
import SettingsBar from "../../components/SettingsBar";
import SettingsContainer from "../../components/SettingsContainer";

export default function Settings() {
  return (
    <Flex flexDirection="column" pt="90px">
      <Box minHeight="64px" />
      <main height="100vh" p="24px">
        <Container maxW="auto" >
          <Box display="flex" h="500px" justifyContent="center">
            <SettingsBar />
            <SettingsContainer />
          </Box>
        </Container>
      </main>
    </Flex>
  );
}
