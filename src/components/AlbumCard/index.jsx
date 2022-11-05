import { Text, Grid, GridItem } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AlbumCard() {
  const [isLargerThan950] = useMediaQuery("(min-width: 950px)");

  return (
    <Grid
      templateColumns={isLargerThan950 ? "repeat(3, 1fr)" : "repeat(2, 1fr)"}
      gap={isLargerThan950 ? "8" : "3"}
    >
      <Link to="/media-saved">
        <GridItem
          boxShadow="0 0 3px black"
          p="25px 15px"
          borderRadius="20px"
          h="270px"
          maxW="100%"
          transition="0.5s"
          _hover={{ transform: "scale(1.03)" }}
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={2} w="200px">
            <GridItem w="100%" h="100%" bgColor="green" borderRadius="15px" />
            <GridItem
              w="100%"
              h={isLargerThan950 ? "90px" : "90px"}
              bgColor="red"
              borderRadius="15px"
            />
            <GridItem
              w="100%"
              h={isLargerThan950 ? "90px" : "90px"}
              bgColor="blue"
              borderRadius="15px"
            />
            <GridItem
              w="100%"
              h={isLargerThan950 ? "90px" : "90px"}
              bgColor="yellow"
              borderRadius="15px"
            />
          </Grid>
          <Text p="0 10px" mt="10px" fontSize="1.4rem" fontWeight="500">
            Salvos
          </Text>
        </GridItem>
      </Link>

    </Grid>
  );
}
