import React, { useState } from 'react';
import {Avatar, Text, IconButton, HStack, Box, Button } from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

function Comment({ comment }) {
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  const [showChildComments, setShowChildComments] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const childCommentsStyle = {
    marginLeft: '20px', // Adjust the indentation as needed
    borderLeft: '1px solid #ccc', // Add a border for indentation effect
    paddingLeft: '10px', // Padding to separate child comments
  };

  return (
    <Box
      style={comment.childComments.length > 0 ? childCommentsStyle : null}
      borderWidth="1px"
      borderRadius="md"
      padding="1rem"
    >
      <HStack spacing={4} align="center">
        <Avatar size="sm" src="/path-to-comment-avatar.jpg" alt="Comment Author" />
        <Text fontSize={{ base: 'sm', md: 'md' }} align={'left'}>
          {comment.text}
        </Text>
      </HStack>
      <HStack spacing={2} mt={2} align="center">
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
        {comment.childComments.length > 0 && (
          <Button
            size="xs"
            onClick={() => setShowChildComments(!showChildComments)}
          >
            {showChildComments ? 'Hide Replies' : 'Show Replies'}
          </Button>
        )}
        {comment.link && (
          <Link href={comment.link} isExternal>
            <LinkIcon />
          </Link>
        )}
      </HStack>
      {showChildComments && (
        <Box mt={2}>
          {comment.childComments.map((childComment) => (
            <Comment key={childComment.id} comment={childComment} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Comment;
