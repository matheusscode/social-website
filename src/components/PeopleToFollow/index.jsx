import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Avatar,
  Button,
} from "@chakra-ui/react";
import posts from "../../data/items";
import { useMediaQuery } from "@chakra-ui/react";

export default function PeopleToFollow() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box
      w="300px"
      display={isLargerThan800 ? "block" : "none"}
      boxShadow="0 0 3px #7f7f7f"
      borderRadius="8px"
      p="20px"
    >
      <Text fontSize="1.1rem" fontWeight="700">
        Suggestions for you to follow
      </Text>
      <Flex flexDirection="column" mt="25px">
        <List>
          {posts.slice(0, 2).map((post) => {
            return (
              <ListItem key={post.id} p="0 0 15px">
                <Flex alignItems="center" gap="15px">
                  <Avatar src={post.avatar} />
                  <Text fontWeight="600">{post.name}</Text>
                </Flex>
              </ListItem>
            );
          })}
          <Box display="flex" justifyContent="center" p="10px 0 0">
            <Button w="150px" borderRadius="10px" color="#3a61a9">
              Show More
            </Button>
          </Box>
        </List>
      </Flex>
    </Box>
  );
}
