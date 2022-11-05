import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Avatar,
  AvatarBadge,
  Image,
} from "@chakra-ui/react";
import posts from "../../data/items";
import { FaBars } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../public/assets/__images/globaldev-logo.png";

export default function HeaderMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <Flex
      w="100%"
      bg="#202a4c"
      p="20px 10px"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        position="absolute"
        left="0%"
        bg="none"
        h="80px"
        w="80px"
        onClick={onOpen}
        _hover={{ bgColor: "#171e36" }}
      >
        <Icon fontSize="1.8rem" color="aliceblue" as={FaBars} />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {posts.slice(0, 1).map((item) => {
          return (
            <ModalContent
              key={item.id}
              bg="#202a4c"
              color="aliceblue"
              position="fixed"
              left="0%"
              top="-8%"
              maxW="70%"
              h="100vh"
            >
              <ModalHeader
                p="15px 15px 30px"
                bg="#141b31"
                transition="0.5s"
                _hover={{ bgColor: "#0d1121" }}
                borderBottomRightRadius="80%"
                borderBottom="7px solid #f7f7f7"
              >
                <Flex w="100%">
                  <Link to="/account">
                    <Avatar src={item.avatar}>
                      <AvatarBadge
                        border="none"
                        boxSize="1.15em"
                        bg={item.statusColor}
                      />
                    </Avatar>
                    <Text mt="2px">{item.name}</Text>
                    <Flex gap="3px" mt="2px" fontSize="1rem">
                      Status:{" "}
                      <Text color={item.statusColor}>{item.status}</Text>
                    </Flex>
                  </Link>
                </Flex>
              </ModalHeader>
              <ModalCloseButton
                transition="0.3s"
                bgColor="red"
                _hover={{ bgColor: "#610000" }}
              />
              <ModalBody pt="40px">
                <List>
                  <ListItem
                    p="10px"
                    borderRadius="10px"
                    transition="0.5s"
                    _hover={{ bgColor: "#141b31" }}
                  >
                    <Link to="/">
                      <Text
                        pl="10px"
                        fontSize="1.5rem"
                        transition="0.1s ease-in-out"
                        borderRadius="100%"
                        borderRight="1px solid #00f7ff"
                        _hover={{
                          borderLeft: "4px solid #00f7ff",
                          borderRadius: "3px",
                          borderRight: "none",
                        }}
                      >
                        Home
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem
                    p="10px"
                    borderRadius="10px"
                    transition="0.5s"
                    _hover={{ bgColor: "#141b31" }}
                  >
                    <Link to="/gallery">
                      <Text
                        pl="10px"
                        fontSize="1.5rem"
                        transition="0.1s ease-in-out"
                        borderRadius="100%"
                        borderRight="1px solid #ff00ff"
                        _hover={{
                          borderLeft: "4px solid #ff00ff",
                          borderRadius: "3px",
                          borderRight: "none",
                        }}
                      >
                        Gallery
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem
                    p="10px"
                    borderRadius="10px"
                    transition="0.5s"
                    _hover={{ bgColor: "#141b31" }}
                  >
                    <Link to="/sing-in">
                      <Text
                        pl="10px"
                        fontSize="1.5rem"
                        transition="0.1s ease-in-out"
                        borderRadius="100%"
                        borderRight="1px solid #12da00"
                        _hover={{
                          borderLeft: "4px solid #12da00",
                          borderRadius: "3px",
                          borderRight: "none",
                        }}
                      >
                        Friends
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem
                    p="10px"
                    borderRadius="10px"
                    transition="0.5s"
                    _hover={{ bgColor: "#141b31" }}
                  >
                    <Link to="/sing-in">
                      <Text
                        pl="10px"
                        fontSize="1.5rem"
                        transition="0.1s ease-in-out"
                        borderRadius="100%"
                        borderRight="1px solid #ff6f00"
                        _hover={{
                          borderLeft: "4px solid #ff6f00",
                          borderRadius: "3px",
                          borderRight: "none",
                        }}
                      >
                        Notications
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem
                    p="10px"
                    borderRadius="10px"
                    transition="0.5s"
                    _hover={{ bgColor: "#141b31" }}
                  >
                    <Link to="/sing-in">
                      <Text
                        pl="10px"
                        fontSize="1.5rem"
                        transition="0.1s ease-in-out"
                        borderRadius="100%"
                        borderRight="1px solid #466eb9"
                        _hover={{
                          borderLeft: "4px solid #466eb9",
                          borderRadius: "3px",
                          borderRight: "none",
                        }}
                      >
                        Topic Trends
                      </Text>
                    </Link>
                  </ListItem>
                  <ListItem
                    p="10px"
                    borderRadius="10px"
                    transition="0.5s"
                    _hover={{ bgColor: "#141b31" }}
                  >
                    <Link to="/settings">
                      <Text
                        pl="10px"
                        fontSize="1.5rem"
                        transition="0.2s ease-in-out"
                        borderRadius="100%"
                        borderRight="1px solid #f4e800"
                        _hover={{
                          borderLeft: "4px solid #f4e800",
                          borderRadius: "3px",
                          borderRight: "none",
                        }}
                      >
                        Settings
                      </Text>
                    </Link>
                  </ListItem>
                </List>
              </ModalBody>

              <ModalFooter
                position="absolute"
                w="200px"
                bottom="10px"
                left="20%"
              >
                <Text color="#828282" textAlign="center" fontWeight="600">
                  Site Feito por: Matheus Figueiredo
                </Text>
              </ModalFooter>
            </ModalContent>
          );
        })}
      </Modal>
      <Box>
        <Link to="/">
          <Image src={logoImg} w="200px" />
        </Link>
      </Box>
    </Flex>
  );
}

{
  /*<Flex p="20px" w="100%" bg="#202a4c" justifyContent="space-between">
      <Menu>
        <MenuButton color="aliceblue">
          <Icon fontSize="1.7rem" as={FaBars} />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
  </Flex>*/
}
