import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Icon } from "@chakra-ui/icons";

export default function SearchBar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <InputGroup
      display={isLargerThan800 ? "block" : "none"}
      w="300px"
      boxShadow="0 0 3px #7f7f7f"
      borderRadius="8px"
      p="20px"
    >
      <InputLeftElement pointerEvents="none">
        <Icon
          position="absolute"
          left="1.9rem"
          top="1.7rem"
          fontSize="1.5rem"
          as={BiSearchAlt2}
        />
      </InputLeftElement>
      <Input type="text" fontSize="1.1rem" placeholder="Search" />
    </InputGroup>
  );
}
