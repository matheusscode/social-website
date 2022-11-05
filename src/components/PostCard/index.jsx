import {
  Box,
  Wrap,
  WrapItem,
  Avatar,
  AvatarBadge,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Box
      maxW="800px"
      m="0 0 35px 0"
      boxShadow="0 0 3px #7f7f7f"
      borderRadius="8px"
      p="20px"
    >
      <Box mb="20px">
        <Wrap>
          <WrapItem p="0 10px 0 0">
            <Avatar w="60px" h="60px" name={post.name} src={post.avatar}>
              <AvatarBadge boxSize="1.15em" bg="green.500" />
            </Avatar>
          </WrapItem>
          <Box>
            <Text fontSize="1.2rem" fontWeight="600" variant="h6">
              Criando API com FireBase
            </Text>
            <Text fontWeight="600" variant="subtitle">
              Avaliado por: {post.name}
            </Text>
          </Box>
          <Text fontSize="1.15em" fontWeight="600">
            {post.description}
          </Text>
        </Wrap>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          w="100%"
          borderRadius="6px"
          src={post.image}
          alt={post.image}
        />
      </Box>
      <Flex m="15px 0 0 3px" justifyContent="space-between">
        <Box>
          <Link>
            <Button m="0 10px">
              <Icon title="Like" fontSize="1.7rem" as={AiOutlineHeart} />
            </Button>
          </Link>
          <Link>
            <Button m="0 10px 0 0">
              <Icon title="Comment" fontSize="1.7rem" as={BiCommentDetail} />
            </Button>
          </Link>
          <Link>
            <Button>
              <Icon title="Save" fontSize="1.7rem" as={HiOutlineSave} />
            </Button>
          </Link>
        </Box>

        <Box>
          <Link>
            <Button m="0 10px" fontSize="1.7rem">
              <Icon title="Snare" as={FiShare} />
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
