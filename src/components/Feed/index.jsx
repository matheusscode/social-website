import { Box } from "@chakra-ui/react";
import PostCard from "../PostCard";
import dataItems from "../../data/items";

export default function Feed() {

  return (
    <Box p="0 20px" maxW="1200px">
      {dataItems.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </Box>
  );
}
