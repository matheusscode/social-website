import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Image,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import posts from "../../data/items";

export default function Notification() {
  return (
    <Flex >
      <Link _hover={{ textDecoration: "none" }}>
        <List>
          <ListItem>
            {posts.slice(0, 2
            ).map((item) => {
              return (
                <Flex
                  key={item.id}
                  flexDirection="column"
                  p="10px 20px 5px"
                  transition="0.5s"
                  borderRadius="20px"
                  _hover={{ bgColor: "#101628" }}
                  mb="10px"
                >
                  <Flex alignItems="center" gap="5px">
                    <Avatar
                      w="40px"
                      h="40px"
                      name={item.name}
                      src={item.avatar}
                    >
                      <AvatarBadge boxSize="1.05em" bg="green" border="none" />
                    </Avatar>
                    <Flex ml="10px" flexDirection="column">
                      <Text color="aliceblue" fontWeight="700">
                        {item.name}
                      </Text>
                      <Text color="aliceblue" fontWeight="500">
                        {" "}
                        Reagiu a Sua Publicação
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex justifyContent="center" p="15px">
                    <Image
                      mt="10px"
                      boxShadow="0 0 5px #ffffff7d"
                      borderRadius="10px"
                      w="300px"
                      h="200px"
                      src={item.image}
                    />
                  </Flex>
                </Flex>
              );
            })}
          </ListItem>
        </List>
      </Link>
    </Flex>
  );
}
