import {
  Flex,
  Box,
  Text,
  List,
  ListItem,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import {
  AiFillHome,
  AiOutlineSave,
  AiOutlineUser,
  AiOutlineBell,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Notification from "../Notification";
import HeaderMobile from "../HeaderMobile";

export default function Header() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

  return (
    <>
      {isLargerThan720 ? (
        <Flex
          w="100%"
          bg="#202a4c"
          justifyContent="space-between"
          p="10px 20px"
          alignItems="center"
          position="fixed"
          zIndex={1}
        >
          <Box>
            <Text color="aliceblue" fontSize="2rem">
              GlobalDev
            </Text>
          </Box>
          <Box>
            <List
              display="flex"
              listStyleType="none"
              alignItems="center"
              gap="30px"
            >
              <ListItem
                textAlign="center"
                fontWeight="500"
                color="aliceblue"
                transition="0.5s"
                _hover={{ color: "#aaaaaa" }}
              >
                <Link to="/">
                  <Icon fontSize="1.8rem" as={AiFillHome} />
                  <Text>Home</Text>
                </Link>
              </ListItem>
              <ListItem
                textAlign="center"
                fontWeight="500"
                color="aliceblue"
                fontSize="1rem"
                transition="0.5s"
                _hover={{ color: "#aaaaaa" }}
              >
                <Link to="/gallery">
                  <Icon fontSize="1.8rem" as={AiOutlineSave} />
                  <Text>Gallery</Text>
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Menu autoSelect={false}>
              <MenuButton color="#aaaaaa">
                <Icon
                  color="aliceblue"
                  fontSize="2rem"
                  mr="20px"
                  as={AiOutlineBell}
                />
              </MenuButton>
              <Portal>
                <MenuList zIndex="2" border="none" bgColor="#161d35">
                  <MenuItem _hover={{ bg: "none" }}>
                    <Notification />
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
            <Menu autoSelect={false}>
              <MenuButton
                p="10px"
                borderRadius="50%"
                transition="0.5s"
                h="50px"
                bgColor="#161d35"
                _hover={{ bgColor: "#0f1525", color: "#aaaaaa" }}
                color="#aaaaaa"
              >
                <Icon color="aliceblue" fontSize="2rem" as={AiOutlineUser} />
              </MenuButton>
              <Portal>
                <MenuList zIndex="2" p="10px" border="none" bgColor="#161d35">
                  <Link to="/sing-in">
                    <MenuItem
                      color="aliceblue"
                      transition="0.5s"
                      _hover={{ bgColor: "#101628" }}
                      fontSize="1rem"
                      fontWeight="600"
                      p="10px 10px"
                    >
                      Login
                    </MenuItem>
                  </Link>
                  <MenuItem
                    color="aliceblue"
                    transition="0.5s"
                    _hover={{ bgColor: "#101628" }}
                    fontSize="1rem"
                    fontWeight="600"
                    p="10px 10px 10px"
                  >
                    <Link to="/settings">Configurations</Link>
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      ) : (
        <HeaderMobile />
      )}
    </>
  );
}
