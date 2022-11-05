import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Switch,
  Stack,
} from "@chakra-ui/react";

export default function SettingsContainer() {
  return (
    <Flex flexDirection="column">
      <Box
        h="100%"
        w="500px"
        bgColor="#171e36"
        borderTopRightRadius="15px"
        borderBottomRightRadius="15px"
      >
        <List>
          <ListItem p="25px 20px">
            <Flex p="5px" borderBottom="1px solid #f3f3f3">
              <Text
                fontSize="1.1rem"
                fontWeight="600"
                p="0 0 7px"
                color="aliceblue"
              >
                Dark Theme
              </Text>
              <Stack ml="auto">
                <Switch size="lg" />
              </Stack>
            </Flex>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
