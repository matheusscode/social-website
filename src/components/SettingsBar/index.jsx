import { Box, Flex, Text, List, ListItem } from "@chakra-ui/react";

export default function () {
  return (
    <Flex flexDirection="column">
      <Box
        width="200px"
        h="100%"
        bgColor="#202A4C"
        borderTopLeftRadius="15px"
        borderBottomLeftRadius="15px"
      >
        <List p="10px 15px">
          <ListItem borderRadius="7px" p="10px" w="100%">
            <Text
              w="150px"
              p="10px 15px"
              borderBottom="1px solid white"
              fontSize="1.2rem"
              color="aliceblue"
              fontWeight="600"
            >
              Theme
            </Text>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
