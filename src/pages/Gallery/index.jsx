import { Box, Flex, Container } from "@chakra-ui/react";
import AlbumCard from "../../components/AlbumCard";

export default function Gallery() {
  return (
    <Flex flexDirection="column" pt="60px">
      <Box minHeight="64px" />
      <main height="100vh" p="24px">
        <Container maxW="auto">
          <Box display="flex" justifyContent="center">
            <AlbumCard />
          </Box>
        </Container>
      </main>
    </Flex>
  );
}
