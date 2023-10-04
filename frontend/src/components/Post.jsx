import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  IconButton,
  HStack,
  Avatar,
  Link,
} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon, LinkIcon } from '@chakra-ui/icons';
import Comment from './Comment';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      padding="1rem"
      maxW={{ base: '100%', md: '600px' }}
    >
      <Avatar size="sm" src="/path-to-post-avatar.jpg" alt="Post Author" />
      <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }}>
        {post.title}
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }}>{post.content}</Text>
      <HStack spacing={2}>
        <IconButton
          aria-label="Like"
          icon={<ArrowUpIcon />}
          onClick={handleLike}
        />
        <span>{likes}</span>
        <IconButton
          aria-label="Dislike"
          icon={<ArrowDownIcon />}
          onClick={handleDislike}
        />
        <span>{dislikes}</span>
      </HStack>
      {post.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  );
}

export default Post;
