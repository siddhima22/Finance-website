import React, { useState } from 'react';
import { VStack, Text, IconButton, HStack,Avatar } from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
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
    <VStack p={4} borderWidth="1px" borderRadius="md" align="start">
    <HStack spacing={4} align="center">
      <Avatar size="sm" src="/path-to-post-avatar.jpg" alt="Post Author" />
      <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl' }}>
        {post.title}
      </Text>
    </HStack>
    <Text fontSize={{ base: 'sm', md: 'md' }} align={'left'}>{post.content}</Text>
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
  </VStack>
  );
}

export default Post;
