import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Avatar,
  AvatarBadge,
  Button,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import posts from "../../data/items";
import PeopleToFollow from "../../components/PeopleToFollow";
import SearchBar from "../SearchBar";

export default function Contacts() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box h="100%">
      <Box mb="20px">
        <SearchBar />
      </Box>
      <Box
        display={isLargerThan800 ? "block" : "none"}
        w="300px"
        boxShadow="0 0 3px #7f7f7f"
        borderRadius="8px"
        p="20px"
      >
        <Text p="0 0 20px" fontWeight="700" fontSize="1.15rem">
          Your contacts
        </Text>
        <Flex flexDirection="column">
          <List>
            {posts.map((item) => {
              return (
                <ListItem key={item.id} p="0 0 15px">
                  <Flex alignItems="center" gap="15px">
                    <Avatar src={item.avatar}>
                      <AvatarBadge boxSize="1.25em" bg={item.statusColor} />
                    </Avatar>
                    <Text fontWeight="600">{item.name}</Text>
                  </Flex>
                </ListItem>
              );
            })}
            <Box display="flex" justifyContent="center" p="10px 0 0">
              <Button w="150px" borderRadius="10px" color="#3a61a9">
                Ver Mais
              </Button>
            </Box>
          </List>
        </Flex>
      </Box>
      <Box mt="20px">
        <PeopleToFollow />
      </Box>
    </Box>
  );
}
