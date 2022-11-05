import { Box, Button, Text, List, ListItem } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Trend() {
  const [isLargerThan920] = useMediaQuery("(min-width: 920px)");
  const tags = [
    { id: 1, name: "ReactJS" },
    { id: 2, name: "Chakra UI" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "CSS3" },
    { id: 5, name: "TypeScript" },
  ];

  return (
    <Box
      display={isLargerThan920 ? "block" : "none"}
      p="16px"
      w="300px"
      h="100%"
      boxShadow="0 0 3px #7f7f7f"
      borderRadius="10px"
    >
      <Link to="/sing-in">
        <Button
          borderRadius="10px"
          boxShadow="0 0 2px #7f7f7f"
          w="100%"
          color="#3a61a9"
        >
          Registrar Grátis
        </Button>
      </Link>
      <Text
        borderBottom="1px solid #7f7f7fb6"
        fontSize="0.9rem"
        color="#1e1e1e"
        fontWeight="700"
        m="15px"
        p="10px 5px 10px"
      >
        Tags em Alta
      </Text>
      <List p="5px" mt="10px">
        {tags.map((item) => {
          return (
            <ListItem key={item.id}>
              <Button
                color="#3c3c3c"
                bg="none"
                fontSize="0.9rem"
                borderRadius="5px"
              >{`#${item.name}`}</Button>
            </ListItem>
          );
        })}
        <ListItem p="15px 0 5px" borderRadius="10px" color="#3a61a9">
          <Button fontSize="0.9rem">Exibir mais tags</Button>
        </ListItem>
      </List>
    </Box>
  );
}
